import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { withStyles } from 'tss-react/mui';
import { topicsContent as strings } from '../strings';
import TipPopover from 'common/components/Popover/TipPopover';
import TagsAutoComplete from 'common/components/Autocomplete/TagsAutocomplete';
import { topics } from 'common/constants';
import { useAppDispatch, useAppSelector } from 'store';
import { updateCanContinue, updateStep, updateTopics } from '../state';

const TopicsContent = () => {
  const selectedTopics = useAppSelector((state) => state.newProfile.profile.topics);
  const canContinue = useAppSelector((state) => state.newProfile.canContinue);
  const dispatch = useAppDispatch();

  const handleUpdate = (values: string[]) => {
    dispatch(updateTopics(values));
    if (values.length >= 1) dispatch(updateCanContinue(true));
    else dispatch(updateCanContinue(false));
  };

  const handleNextStep = () => {
    if (!canContinue) return;

    dispatch(updateStep('next'));
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
              maxTags={3}
              minTags={1}
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
          <Button onClick={handleNextStep} fullWidth disabled={!canContinue}>
            {strings.next_step_btn}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const PopoverWrapper = withStyles(Box, (theme) => ({
  root: {
    backgroundColor: theme.palette.warning.main,
  },
}));

export default TopicsContent;
