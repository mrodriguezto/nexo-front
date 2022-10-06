import { Box, Button, Chip, Stack, TextField, Typography } from '@mui/material';
import { keywordsContent as strings } from '../strings';
import { Add } from '@mui/icons-material';
import TipPopover from 'common/components/Popover/TipPopover';
import TagsAutoComplete from 'common/components/Autocomplete/TagsAutocomplete';
import { keywords } from 'common/constants';
import { useAppDispatch, useAppSelector } from 'store';
import { updateCanContinue, updateKeywords, updateStep } from '../state';

const KeywordsContent = () => {
  const selectedKeywords = useAppSelector(
    (state) => state.newProfile.profile.keywords,
  );
  const canContinue = useAppSelector((state) => state.newProfile.canContinue);
  const dispatch = useAppDispatch();

  const handleUpdate = (values: string[]) => {
    dispatch(updateKeywords(values));
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
        <Box marginTop={3} marginBottom={1}>
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
              options={keywords}
              label={strings.placeholder}
              initialValues={selectedKeywords}
              maxTags={6}
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
              <Chip
                onClick={() => {}}
                key={tag}
                label={tag}
                deleteIcon={<Add />}
                onDelete={() => {}}
              />
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

export default KeywordsContent;
