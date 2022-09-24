import { Box, Button, Stack } from '@mui/material';
import ProfileCard from 'common/components/Card/ProfileCard';
import { basicInfoSideinfo as strings } from '../strings';

const profile = strings.profile;

const BasicInfoSideinfo = () => {
  return (
    <Stack height="100%">
      <ProfileCard profile={profile} />
      <Box flex={1} />
      <Button>{strings.btns.next_step}</Button>
    </Stack>
  );
};

export default BasicInfoSideinfo;
