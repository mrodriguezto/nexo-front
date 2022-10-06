import { Box, Typography, Button } from '@mui/material';
import TagsAutocomplete from 'common/components/Autocomplete/TagsAutocomplete';
import { disciplines } from 'common/constants';
import { disciplinesContent as strings } from '../strings';
import { useAppSelector, useAppDispatch } from 'store';
import { updateCanContinue, updateDisciplines, updateStep } from '../state';

const DisciplinesContent = () => {
  const selectedDisciplines = useAppSelector(
    (state) => state.newProfile.profile.disciplines,
  );
  const canContinue = useAppSelector((state) => state.newProfile.canContinue);
  const dispatch = useAppDispatch();

  const handleUpdate = (values: string[]) => {
    dispatch(updateDisciplines(values));
    if (values.length >= 1) dispatch(updateCanContinue(true));
    else dispatch(updateCanContinue(false));
  };

  const handleNextStep = () => {
    if (!canContinue) return;

    dispatch(updateStep('next'));
  };

  return (
    <Box>
      <Box maxWidth={600}>
        <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
          {strings.title}
        </Typography>
      </Box>
      <Box marginY={4} maxWidth={600}>
        <Typography variant="body1">{strings.info}</Typography>
      </Box>
      <Box maxWidth={500}>
        <TagsAutocomplete
          id="disciplines-autocomplete"
          label={strings.auto_complete_label}
          options={disciplines}
          onUpdate={handleUpdate}
          initialValues={selectedDisciplines}
          maxTags={3}
          minTags={1}
          freeSolo
        />
        <Typography display="block" textAlign="right" variant="caption">
          {strings.info_max}
        </Typography>
      </Box>
      <Box
        marginTop={16}
        display={{
          xs: 'block',
          md: 'none',
        }}
      >
        <Button onClick={handleNextStep} disabled={!canContinue} fullWidth>
          {strings.next_step_btn}
        </Button>
      </Box>
    </Box>
  );
};

export default DisciplinesContent;
