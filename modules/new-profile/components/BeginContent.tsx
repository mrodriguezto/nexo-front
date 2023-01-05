import { Button, Box, Typography } from '@mui/material';
import Image from 'next/image';

import { useAppDispatch } from 'store';
import { beginContent as strings } from '../strings';
import { updateStep } from '../state';

const BeginContent = () => {
  const dispatch = useAppDispatch();

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
        marginY={4}
      >
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
        marginY={4}
      >
        <Typography variant="body1" marginBottom={3}>
          {strings.info}
        </Typography>
        <Button onClick={() => dispatch(updateStep('next'))}>
          {strings.begin_btn}
        </Button>
      </Box>
    </Box>
  );
};

export default BeginContent;
