import { Box } from '@mui/material';
import Image from 'next/image';

const DisciplinesSideinfo = () => {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={500}>
      <Image src="/images/profile-2.svg" alt="" layout="fill" objectFit="contain" />
    </Box>
  );
};

export default DisciplinesSideinfo;
