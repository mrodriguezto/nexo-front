import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import { beginContent as strings } from '../strings';

const BeginContent = () => {
  return (
    <Box
      textAlign={{
        xs: 'center',
        md: 'left',
      }}
      maxWidth={600}
    >
      <Typography variant="h1" color="primary" fontWeight={500}>
        {strings.title}
      </Typography>
      <Box
        display={{
          xs: 'block',
          md: 'none',
        }}
        position="relative"
        width="100%"
        height="100%"
        minHeight={200}
        maxHeight={250}
      >
        {/* TODO: Change to the proper image */}
        <Image
          src="/images/profile/1.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box
        maxWidth={{
          xs: undefined,
          md: 350,
        }}
        marginY={6}
      >
        <Typography variant="body1" marginBottom={6}>
          {strings.info}
        </Typography>
        <Button onClick={() => {}}>{strings.begin_btn}</Button>
      </Box>
    </Box>
  );
};

export default BeginContent;
