import { useEffect, useRef, useState } from 'react';
import { Autocomplete, Grid, TextField, Typography } from '@mui/material';
import { PlaceType } from 'common/types';
import { loadScript, throttle } from 'common/utils';
import parse from 'autosuggest-highlight/parse';

const autocompleteService = { current: null };

// Restrictions for the places api request:
// country: Peru, language: spanish (latam)
const restrictions = {
  language: 'es-419',
  componentRestrictions: {
    country: 'PE',
  },
};

type Props = {
  id: string;
  updateValue: (newValue: PlaceType | null) => void;
  label: string;
  helperText?: string;
  error?: boolean;
};

const LocationAutocomplete = ({
  id,
  updateValue,
  label,
  error,
  helperText,
}: Props) => {
  const [value, setValue] = useState<PlaceType | null>(null);
  const [options, setOptions] = useState<readonly PlaceType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const loaded = useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

      console.log(API_KEY);
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`,
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }

  useEffect(() => {
    const fetch = throttle(
      (
        request: { input: string },
        callback: (results?: readonly PlaceType[]) => void,
      ) =>
        (autocompleteService.current as any).getPlacePredictions(request, callback),
      400,
    );

    let active = true;

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (
        window as any
      ).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch(
      { input: inputValue, ...restrictions },
      (results?: readonly PlaceType[]) => {
        if (active) {
          let newOptions: readonly PlaceType[] = [];

          if (value) newOptions = [value];

          if (results) newOptions = [...newOptions, ...results];

          setOptions(newOptions);
        }
      },
    );

    return () => {
      active = false;
    };
  }, [value, inputValue]);

  const handleValueChange = (e: any, newValue: PlaceType | null) => {
    setOptions(newValue ? [newValue, ...options] : options);
    setValue(newValue);
    updateValue(newValue);
  };

  const handleInputChange = (e: any, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  return (
    <div>
      <Autocomplete
        id={id}
        autoComplete
        includeInputInList
        filterSelectedOptions
        filterOptions={(x) => x}
        value={value}
        options={options}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.description
        }
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            label={label}
            error={error}
            helperText={helperText}
          />
        )}
        onChange={handleValueChange}
        onInputChange={handleInputChange}
        renderOption={(props, option) => {
          const matches = option.structured_formatting.main_text_matched_substrings;
          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match: any) => [match.offset, match.offset + match.length]),
          );

          return (
            <li {...props}>
              <Grid container alignItems="center">
                <Grid item xs>
                  {parts.map((part, index) => (
                    <span
                      key={index + part.text}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                  <Typography variant="body2" color="text.secondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
    </div>
  );
};

export default LocationAutocomplete;
