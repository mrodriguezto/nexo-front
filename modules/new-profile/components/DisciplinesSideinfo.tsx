import { Box, Button, Stack } from '@mui/material';
import Image from 'next/image';
import { disciplinesSideinfo as strings } from '../strings';

const DisciplinesSideinfo = () => {
  return (
    <Stack height="100%">
      <Box
        position="relative"
        width="100%"
        height="100%"
        maxHeight={500}
        marginTop={4}
      >
        <Image
          src="/images/profile-2.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box flex={1} />
      <Button>{strings.next_btn}</Button>
    </Stack>
  );
};

export default DisciplinesSideinfo;
