import { CalendarMonth, LocationOnOutlined, SellOutlined } from '@mui/icons-material';
import { ButtonBase, Chip, Stack, Typography } from '@mui/material';
import { withStyles } from 'tss-react/mui';

import { dateFunctions } from 'common/utils';
import { useAppDispatch, useAppSelector } from 'store';
import { toggleDetailsDialog } from '../state';

const AddDetailsButtons = () => {
  const jobAd = useAppSelector((state) => state.newJobAd.ad);
  const dispatch = useAppDispatch();

  const hasExtraInfo = Boolean(
    jobAd.tags.length > 0 || jobAd.location || jobAd.expiration_date.length > 0,
  );

  return (
    <ExtraInputsButton onClick={() => dispatch(toggleDetailsDialog(true))}>
      {hasExtraInfo ? (
        <Stack spacing={1}>
          <Stack flexDirection="row" columnGap={1}>
            <SellOutlined />
            <Stack gap={1} flexDirection="row" flexWrap="wrap">
              {jobAd.tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </Stack>
          </Stack>
          <Stack flexDirection="row" columnGap={1}>
            <LocationOnOutlined />
            <Typography variant="body2" color="primary">
              {jobAd.location?.description}
            </Typography>
          </Stack>
          <Stack flexDirection="row" columnGap={1}>
            <CalendarMonth />
            <Typography variant="body2" color="primary">
              {jobAd.expiration_date ? dateFunctions.format(jobAd.expiration_date) : ''}
            </Typography>
          </Stack>
        </Stack>
      ) : (
        <Stack flexDirection="row">
          <SellOutlined />
          <LocationOnOutlined />
          <CalendarMonth />
        </Stack>
      )}
    </ExtraInputsButton>
  );
};

const ExtraInputsButton = withStyles(ButtonBase, (theme) => ({
  root: {
    borderRadius: 8,
    padding: '0.5em 0.5em',
    justifyContent: 'flex-start',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.08)',
    },
  },
}));

export default AddDetailsButtons;
