import { Box } from '@mui/material';
import Image from 'next/image';

const BeginSideinfo = () => {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={500}>
      <Image src="/images/profile-1.svg" alt="" layout="fill" objectFit="contain" />
    </Box>
  );
};

export default BeginSideinfo;
