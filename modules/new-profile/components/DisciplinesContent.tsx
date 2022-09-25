import { Box, Typography, TextField, Stack, Button } from '@mui/material';
import Image from 'next/image';
import { disciplinesContent as strings } from '../strings';

const DisciplinesContent = () => {
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
      <Box maxWidth={600}>
        <Box marginY={4}>
          <Typography variant="body1">{strings.info}</Typography>
        </Box>
        <Box>
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
    </Box>
  );
};

export default DisciplinesContent;
