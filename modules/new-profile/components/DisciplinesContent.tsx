import { Box, Typography } from '@mui/material';
import TagsAutocomplete from 'common/components/Autocomplete/TagsAutocomplete';
import { disciplines } from 'common/constants';
import { disciplinesContent as strings } from '../strings';
import { useAppSelector, useAppDispatch } from 'store';
import { updateDisciplines } from '../state';
import NextStepButton from './NextStepButton';
import { useEffect, useState } from 'react';
import { MAX_DISCIPLINES, MIN_TAGS } from '../utils';

const DisciplinesContent = () => {
  const selectedDisciplines = useAppSelector(
    (state) => state.newProfile.profile.disciplines,
  );
  const [isValid, setIsValid] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedDisciplines.length >= 1) setIsValid(true);
    else setIsValid(false);
  }, [selectedDisciplines]);

  const handleUpdate = (values: string[]) => {
    dispatch(updateDisciplines(values));
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
          maxTags={MAX_DISCIPLINES}
          minTags={MIN_TAGS}
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
        <NextStepButton btnLabel={strings.next_step_btn} isValid={isValid} />
      </Box>
    </Box>
  );
};

export default DisciplinesContent;
