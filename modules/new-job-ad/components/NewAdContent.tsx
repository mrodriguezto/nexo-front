import {
  Box,
  Button,
  FormControl,
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
import { updatePersona, updatePreview } from '../state';
import { useSnackbar } from 'notistack';

const personas = [
  { lbl: 'Miguel Rodriguez', value: 'miguel.rodriguez' },
  { lbl: 'Nexoescena', value: 'nexoescena' },
];

const NewAdContent = () => {
  const persona = useAppSelector((state) => state.newJobAd.ad.persona);
  const isValid = useAppSelector((state) => state.newJobAd.isValid);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const newPersona = event.target.value;

    dispatch(updatePersona(newPersona));
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
