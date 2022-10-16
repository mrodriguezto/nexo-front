import { Check } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

type Props = {
  id?: string;
  label: string;
  placeholder?: string;
  initialValues?: string[];
  options: string[];
  freeSolo?: boolean;
  onUpdate: (values: string[]) => void;
  maxTags: number;
  minTags: number;
  error?: boolean;
  helperText?: string;
};

const TagsAutoComplete = ({
  id,
  options,
  label,
  placeholder,
  freeSolo = false,
  onUpdate,
  initialValues = [],
  maxTags,
  minTags,
}: Props) => {
  const [values, setValues] = useState<string[]>(initialValues);
  const [isChanged, setIsChanged] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isMaxed = values.length === maxTags;

  const handleChange = (e: any, newValues: string[]) => {
    setIsChanged(true);
    if (newValues.length > maxTags) {
      return;
    }

    if (newValues.length < minTags) {
      setError(`Ingresa al menos ${minTags} tag${minTags > 1 ? 's' : ''}`);
    } else {
      setError(null);
    }

    setValues(newValues);
    onUpdate(newValues);
  };

  return (
    <>
      <Autocomplete
        value={values}
        id={id}
        options={options}
        multiple
        filterSelectedOptions
        renderInput={({ InputLabelProps, inputProps, InputProps, id }) => {
          return (
            <TextField
              id={id}
              InputLabelProps={InputLabelProps}
              inputProps={inputProps}
              InputProps={{
                ...InputProps,
                endAdornment: isMaxed && <Check color="success" />,
              }}
              label={label}
              placeholder={placeholder}
              disabled={isMaxed}
              sx={{
                backgroundColor: isMaxed ? '#eeeeee' : 'initial',
              }}
              error={isChanged && Boolean(error)}
              helperText={error}
            />
          );
        }}
        ChipProps={{
          color: 'primary',
        }}
        onChange={handleChange}
        freeSolo={freeSolo}
        autoComplete
      />
    </>
  );
};

export default TagsAutoComplete;
