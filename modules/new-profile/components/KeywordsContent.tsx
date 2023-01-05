import { Box, Chip, Stack, Typography } from '@mui/material';
import { keywordsContent as strings } from '../strings';
import { Add } from '@mui/icons-material';
import TipPopover from 'common/components/Popover/TipPopover';
import TagsAutoComplete from 'common/components/Autocomplete/TagsAutocomplete';
import { keywords } from 'common/constants';
import { useAppDispatch, useAppSelector } from 'store';
import { updateKeywords } from '../state';
import { useEffect, useState } from 'react';
import NextStepButton from './NextStepButton';
import { MAX_KEYWORDS, MIN_TAGS } from '../utils';

const KeywordsContent = () => {
  const selectedKeywords = useAppSelector(
    (state) => state.newProfile.profile.keywords,
  );
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (selectedKeywords.length >= 1) setIsValid(true);
    else setIsValid(false);
  }, [selectedKeywords]);

  const handleUpdate = (values: string[]) => {
    dispatch(updateKeywords(values));
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
              maxTags={MAX_KEYWORDS}
              minTags={MIN_TAGS}
              onUpdate={handleUpdate}
              freeSolo
            />
          </Box>
          <Typography display="block" textAlign="right" variant="caption">
            {strings.info_max}
          </Typography>
        </Box>

        <Box marginTop={4} maxWidth={500}>
          <Typography variant="h6" gutterBottom>
            {strings.tags_subtitle}
          </Typography>
          <Stack flexDirection="row" gap={1.2} flexWrap="wrap">
            {strings.suggested_tags.map((tag) => (
              <Chip key={tag} label={tag} />
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

export default KeywordsContent;
