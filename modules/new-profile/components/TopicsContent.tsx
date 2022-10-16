import { useEffect, useState } from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { topicsContent as strings } from '../strings';
import TipPopover from 'common/components/Popover/TipPopover';
import TagsAutoComplete from 'common/components/Autocomplete/TagsAutocomplete';
import { topics } from 'common/constants';
import { useAppDispatch, useAppSelector } from 'store';
import { updateTopics } from '../state';
import NextStepButton from './NextStepButton';
import { MAX_TOPICS, MIN_TAGS } from '../utils';

const TopicsContent = () => {
  const selectedTopics = useAppSelector((state) => state.newProfile.profile.topics);
  const [isValid, setIsValid] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedTopics.length >= 1) setIsValid(true);
    else setIsValid(false);
  }, [selectedTopics]);

  const handleUpdate = (values: string[]) => {
    dispatch(updateTopics(values));
  };

  return (
    <Box>
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title}
      </Typography>
      <Box maxWidth={600}>
        <Box marginTop={3} marginBottom={2}>
          <Typography variant="body1">{strings.info}</Typography>
        </Box>
        <Box maxWidth={520}>
          <Box position="relative">
            <Box display="flex" justifyContent="flex-end">
              <TipPopover>
                <Typography variant="h3" marginBottom={2}>
                  {strings.popover_title}
                </Typography>
                <Typography maxWidth={300} variant="body2">
                  {strings.popover_text}
                </Typography>
              </TipPopover>
            </Box>
            <TagsAutoComplete
              id="keywords-autocomplete"
              options={topics}
              label={strings.placeholder}
              initialValues={selectedTopics}
              maxTags={MAX_TOPICS}
              minTags={MIN_TAGS}
              onUpdate={handleUpdate}
              freeSolo
            />
          </Box>
          <Typography display="block" textAlign="right" variant="caption">
            {strings.info_max}
          </Typography>
        </Box>

        <Box marginTop={4}>
          <Typography variant="h6" gutterBottom>
            {strings.tags_subtitle}
          </Typography>
          <Stack flexDirection="row" gap={1} flexWrap="wrap">
            {strings.suggested_tags.map((tag) => (
              <Chip key={tag} label={tag} deleteIcon={<Add />} onDelete={() => {}} />
            ))}
          </Stack>
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
    </Box>
  );
};

export default TopicsContent;
