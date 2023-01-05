import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import { newAdContent as strings } from '../strings';
import AdDescriptionField from './AdDescriptionField';
import { useAppDispatch, useAppSelector } from 'store';
import { updatePersona } from '../state';
import { useState } from 'react';

const personas = [
  { lbl: 'Miguel Rodriguez', value: 'miguel.rodriguez' },
  { lbl: 'Nexoescena', value: 'nexoescena' },
];

const NewAdContent = () => {
  const persona = useAppSelector((state) => state.newJobAd.ad.persona);
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    const newPersona = event.target.value;
    setError(false);
    dispatch(updatePersona(newPersona));
  };

  const handleBlurSelect = () => {
    if (persona) return;

    setError(true);
  };

  return (
    <Stack gap={4} maxWidth={550} height="100%">
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="persona-select">{strings.inputs.persona_select + '*'}</InputLabel>
        <Select
          labelId="persona-select"
          id="persona"
          value={persona}
          label={strings.inputs.persona_select}
          onChange={handleChange}
          onBlur={handleBlurSelect}
        >
          {personas.map((persona) => (
            <MenuItem key={persona.value} value={persona.value}>
              {persona.lbl}
            </MenuItem>
          ))}
        </Select>
        {error && (
          <FormHelperText error>
            {strings.feedback.persona_select_not_valid}
          </FormHelperText>
        )}
      </FormControl>
      <AdDescriptionField />
    </Stack>
  );
};

export default NewAdContent;
