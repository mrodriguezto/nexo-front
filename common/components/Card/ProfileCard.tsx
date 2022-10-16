import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import { withStyles } from 'tss-react/mui';

import { IProfileCardInfo } from 'common/types';
import { profileCard as strings } from 'common/constants';
import { Star, Place, Person, MoreHoriz } from '@mui/icons-material';
import ProfileImageUploader from '@/new-profile/components/ProfileImageUploader';

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
      <Uploader>
        <ProfileImageUploader />
      </Uploader>

      <FloatingMenuButton>
        <MoreHoriz color="disabled" fontSize="large" />
      </FloatingMenuButton>

      {/* CARD BODY */}

      <Stack
        alignItems="center"
        color="gray"
        spacing={2}
        paddingX={5}
        paddingY={2}
        paddingTop={7}
      >
        <Stack textAlign="center" spacing={1} position="relative" width="100%">
          <Typography variant="h3" noWrap={true}>
            {profile.display_name || 'Nombre'}
          </Typography>
          <Typography variant="body1" noWrap={true}>
            {profile.title || 'Título'}
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          rowGap={0.5}
        >
          <Stack
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            width="100%"
          >
            <CalificationText variant="caption">
              {profile.calification || 'Calificación'}
            </CalificationText>

            <Star fontSize="inherit" color="warning" />
          </Stack>

          <Stack
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            width="100%"
          >
            <Typography variant="caption" noWrap={true}>
              {profile.location?.description || 'Ubicación'}
            </Typography>
            <Place fontSize="inherit" />
          </Stack>

          <Typography variant="caption">
            {profile.contacts}{' '}
            {profile.contacts > 0 ? `${strings.contact_lbl}s` : strings.contact_lbl}{' '}
            <Person fontSize="inherit" />
          </Typography>
        </Stack>

        {/* CARD ACTIONS */}

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

const Uploader = withStyles(Box, (theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    right: '0',
    left: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '-80px',
  },
}));

export default ProfileCard;
