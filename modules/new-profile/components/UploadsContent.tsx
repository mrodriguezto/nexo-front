import { Box, Button, Link, Typography } from '@mui/material';
import { uploadsContent as strings } from '../strings';
import TipPopover from 'common/components/Popover/TipPopover';
import ProfileMediaUploader from './ProfileMediaUploader';
import { useAppSelector } from 'store';

const UploadsContent = () => {
  const canContinue = useAppSelector((state) => state.newProfile.canContinue);

  const handleFinalize = () => {
    if (!canContinue) return;

    // TODO: finalize the creation
  };

  const handleSkip = () => {
    // TODO: finalize the creation
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
          <Link onClick={handleSkip}>{strings.do_later_link}</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadsContent;
