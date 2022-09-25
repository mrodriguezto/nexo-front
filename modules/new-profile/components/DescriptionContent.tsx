import { Box, Button, TextField, Typography } from '@mui/material';
import { withStyles } from 'tss-react/mui';
import { descriptionContent as strings } from '../strings';

const MAX_CHARS = 800;

const DescriptionContent = () => {
  return (
    <Box
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title}
      </Typography>
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title2}
      </Typography>
      <Box maxWidth={600}>
        <Box marginY={4}>
          <Typography variant="body1">{strings.info}</Typography>
        </Box>
        <Box position="relative">
          <TextField multiline rows={4} placeholder={strings.placeholder} />
          <MaxCharsText variant="caption" color="gray">
            0/{MAX_CHARS}
          </MaxCharsText>
        </Box>

        <Box
          marginTop={12}
          display={{
            xs: 'block',
            sm: 'none',
          }}
        >
          <Button fullWidth>{strings.next_step_btn}</Button>
        </Box>
      </Box>
    </Box>
  );
};

const MaxCharsText = withStyles(Typography, () => ({
  root: {
    position: 'absolute',
    bottom: '1em',
    right: '1em',
  },
}));

export default DescriptionContent;
