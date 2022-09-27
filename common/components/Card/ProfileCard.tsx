import {
  Box,
  Button,
  ButtonBase,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { withStyles } from 'tss-react/mui';

import { IProfileCardInfo } from 'common/types';
import { profileCard as strings } from 'common/strings';
import { Star, Place, Person, MoreHoriz, AddAPhoto } from '@mui/icons-material';

type Props = {
  profile: IProfileCardInfo;
};

const ProfileCard = ({ profile }: Props) => {
  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{ position: 'relative', width: '100%', maxWidth: 320 }}
    >
      <UploadImageButton>
        <AddAPhoto fontSize="large" color="inherit" />
      </UploadImageButton>
      <FloatingMenuButton>
        <MoreHoriz color="disabled" fontSize="large" />
      </FloatingMenuButton>
      <Stack
        alignItems="center"
        color="gray"
        spacing={2}
        paddingX={5}
        paddingY={2}
        paddingTop={7}
      >
        <Stack textAlign="center" spacing={1}>
          <Typography variant="h3">{profile.name}</Typography>
          <Typography variant="body1">{profile.title}</Typography>
        </Stack>
        <Stack textAlign="right">
          <CalificationText variant="caption">
            {profile.calification} <Star fontSize="inherit" />
          </CalificationText>
          <Typography variant="caption">
            {profile.location} <Place fontSize="inherit" />
          </Typography>
          <Typography variant="caption">
            {profile.contacts}{' '}
            {profile.contacts > 0 ? `${strings.contact_lbl}s` : strings.contact_lbl}{' '}
            <Person fontSize="inherit" />
          </Typography>
        </Stack>
        <Stack spacing={1} width="100%">
          <Button size="medium" disabled>
            {strings.btns.add}
          </Button>
          <Button size="medium" variant="outlined" disabled>
            {strings.btns.msg}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

const CalificationText = withStyles(Typography, (theme) => ({
  root: {
    color: theme.palette.warning.main,
  },
}));

const FloatingMenuButton = withStyles(IconButton, (theme) => ({
  root: {
    position: 'absolute',
    right: '0.5em',
  },
}));

const UploadImageButton = withStyles(IconButton, (theme) => ({
  root: {
    position: 'absolute',
    backgroundColor: theme.palette.grey[200],
    right: '0',
    left: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '120px',
    height: '120px',
    top: '-25%',
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },
}));

export default ProfileCard;
