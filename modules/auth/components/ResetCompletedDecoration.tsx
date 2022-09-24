import { Box } from '@mui/material';
import Image from 'next/image';

const ResetCompletedDecoration = () => {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={500}>
      <Image
        src="/images/auth-thumbs.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default ResetCompletedDecoration;
