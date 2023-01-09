import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { Box, Button, Link, Typography } from '@mui/material';
import { uploadsContent as strings } from '../strings';
import TipPopover from 'common/components/Popover/TipPopover';
import ProfileMediaUploader from './ProfileMediaUploader';
import { store, useAppSelector } from 'store';
import { getProfileToSend } from '../services';
import { useMutation } from '@apollo/client';
import { CREATE_PROFILE } from '../utils';

const UploadsContent = () => {
  const canContinue = useAppSelector((state) => state.newProfile.canContinue);
  const profile = useAppSelector((state) => state.newProfile.profile);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [sendProfile, { loading }] = useMutation(CREATE_PROFILE);

  const handleFinalize = () => {
    if (!canContinue) return;

    // createProfile(profile)
    //   .then(() => {
    //     // router.replace('/profile');
    //   })
    //   .catch(() => {
    //     enqueueSnackbar('Algo salió mal', {
    //       variant: 'error',
    //     });
    //   });
  };

  const handleSkip = async () => {
    const state = store.getState();
    const profile = await getProfileToSend(state.newProfile.profile);

    try {
      await sendProfile({
        variables: {
          ...profile,
        },
        onCompleted: (data) => {
          console.log(data);
        },
        onError: (error) => {
          enqueueSnackbar('Algo salió mal', {
            variant: 'error',
          });
        },
      });
    } catch (error) {
      enqueueSnackbar('Algo salió mal', {
        variant: 'error',
      });
    }
  };

  return (
    <Box>
      <Typography
        variant="h2"
        component="h1"
        color="primary"
        fontWeight={600}
        maxWidth={700}
      >
        {strings.title}
      </Typography>
      <Box maxWidth={600}>
        <Box marginY={4}>
          <Typography variant="body1">{strings.info}</Typography>
        </Box>
        <Box position="relative">
          <Box
            display={{
              xs: 'block',
              md: 'none',
            }}
            sx={{
              position: 'absolute',
              top: -20,
              right: 0,
            }}
          >
            <TipPopover
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'center',
              }}
              transformOrigin={{
                horizontal: 'right',
                vertical: 12,
              }}
            >
              <Typography
                maxWidth={300}
                variant="body2"
                sx={{ backgroundColor: 'warning' }}
              >
                {strings.popover.desc}
              </Typography>
            </TipPopover>
          </Box>

          <ProfileMediaUploader />
        </Box>

        <Box
          marginTop={12}
          display={{
            xs: 'block',
            md: 'none',
          }}
        >
          <Button onClick={handleFinalize} disabled={!canContinue} fullWidth>
            {strings.next_step_btn}
          </Button>
        </Box>

        <Box
          marginTop={2}
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          <Link
            style={{
              cursor: 'pointer',
            }}
            onClick={handleSkip}
          >
            {strings.do_later_link}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadsContent;
