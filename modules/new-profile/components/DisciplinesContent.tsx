import { Box, Typography, TextField, Button } from '@mui/material';
import { disciplinesContent as strings } from '../strings';

const DisciplinesContent = () => {
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
        <TextField placeholder={strings.placeholder} />
        <Typography display="block" textAlign="right" variant="caption">
          {strings.info_max}
        </Typography>
      </Box>
      <Box
        marginTop={16}
        display={{
          xs: 'block',
          sm: 'none',
        }}
      >
        <Button fullWidth>{strings.next_step_btn}</Button>
      </Box>
    </Box>
  );
};

export default DisciplinesContent;
