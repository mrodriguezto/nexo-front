import { Box } from '@mui/material';
import Image from 'next/image';

const RegisterDecoration = () => {
  return (
    <Box position="relative" width="100%" height="100%">
      <Image src="/images/auth/1.svg" alt=" " layout="fill" objectFit="contain" />
    </Box>
  );
};

export default RegisterDecoration;
