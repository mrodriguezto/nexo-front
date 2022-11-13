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
  const { enqueueSnackbar } = useSnackbar();

  const persona = useAppSelector((state) => state.newJobAd.ad.persona);
  const isValid = useAppSelector((state) => state.newJobAd.isValid);
  const dispatch = useAppDispatch();

  const canPreview = Boolean(isValid && persona.length !== 0);

  const handleChange = (event: SelectChangeEvent) => {
    const newPersona = event.target.value;

    dispatch(updatePersona(newPersona));
  };

  const handleOpenPreview = () => {
    if (!canPreview) {
      enqueueSnackbar(strings.feedback.form_not_valid, {
        variant: 'error',
      });
      return;
    }

    dispatch(updatePreview(true));
  };

  return (
    <Stack gap={4} maxWidth={550} height="100%">
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="persona-select">
          {strings.inputs.persona_select + '*'}
        </InputLabel>
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
      <Stack display={{ xs: 'flex', md: 'none' }} mt={1}>
        <Button disabled={!canPreview} onClick={handleOpenPreview}>
          Vista Previa
        </Button>
      </Stack>
    </Stack>
  );
};

export default NewAdContent;
