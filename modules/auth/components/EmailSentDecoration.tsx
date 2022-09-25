import Image from 'next/image';
import { Box } from '@mui/material';

const EmailSentDecoration = () => {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={500}>
      <Image
        src="/images/auth-cannon.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default EmailSentDecoration;
