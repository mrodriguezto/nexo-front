import {
  Box,
  FormControl,
  Input,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { newAdContent as strings } from '../strings';
import AdDescriptionField from './AdDescriptionField';

const personas = [
  { lbl: 'Miguel Rodriguez', value: '2js72h3sdj9' },
  { lbl: 'Nexoescena', value: 'nexoescena' },
];

const NewAdContent = () => {
  const [persona, setPersona] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPersona(event.target.value as string);
  };

  return (
    <Stack gap={4} maxWidth={550}>
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="persona-select">{strings.inputs.persona_select}</InputLabel>
        <Select
          labelId="persona-select"
          id="persona"
          value={persona}
          label={strings.inputs.persona_select}
          onChange={handleChange}
        >
          {personas.map((persona) => (
            <MenuItem key={persona.value} value={persona.value}>
              {persona.lbl}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <AdDescriptionField />
    </Stack>
  );
};

export default NewAdContent;
