import Image from 'next/image';
import { Box } from '@mui/material';

const KeywordsSideinfo = () => {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={300}>
      <Image src="/images/profile/3.svg" alt="" layout="fill" objectFit="contain" />
    </Box>
  );
};

export default KeywordsSideinfo;
