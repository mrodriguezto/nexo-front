import { Box, Button, Chip, Stack, TextField, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { withStyles } from 'tss-react/mui';
import { topicsContent as strings } from '../strings';
import TipPopover from 'common/components/Popover/TipPopover';

const TopicsContent = () => {
  return (
    <Box>
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title}
      </Typography>
      <Box maxWidth={600}>
        <Box marginY={5}>
          <Typography variant="body1">{strings.info}</Typography>
        </Box>
        <Box maxWidth={520}>
          <TextField
            placeholder={strings.placeholder}
            InputProps={{
              endAdornment: (
                <Box sx={{ position: 'absolute', top: -30, right: 0 }}>
                  <TipPopover>
                    <Typography variant="h3" marginBottom={2}>
                      {strings.popover_title}
                    </Typography>
                    <Typography maxWidth={300} variant="body2">
                      {strings.popover_text}
                    </Typography>
                  </TipPopover>
                </Box>
              ),
            }}
          />
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
          <Button fullWidth>{strings.next_step_btn}</Button>
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
