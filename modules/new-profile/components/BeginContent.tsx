import { Button, Box, Typography } from '@mui/material';
import Image from 'next/image';
import { beginContent as strings } from '../strings';

const BeginContent = () => {
  return (
    <Box
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Typography variant="h1" color="primary" fontWeight={500}>
        {strings.title}
      </Typography>
      <Box
        display={{
          xs: 'block',
          sm: 'none',
        }}
        position="relative"
        width="100%"
        height="100%"
        minHeight={200}
        maxHeight={250}
        marginY={4}
      >
        <Image
          src="/images/profile-1.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box
        maxWidth={{
          xs: undefined,
          sm: 350,
        }}
        marginY={4}
      >
        <Typography variant="body1" marginBottom={3}>
          {strings.info}
        </Typography>
        <Button>{strings.begin_btn}</Button>
      </Box>
    </Box>
  );
};

export default BeginContent;
