import Image from 'next/image';
import { Box } from '@mui/material';

const EnterEmailDecoration = () => {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={400}>
      <Image
        style={{ rotate: '8.72deg' }}
        src="/images/auth-lock.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default EnterEmailDecoration;
