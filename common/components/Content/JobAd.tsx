import { Box, Button, Chip, IconButton, Stack, Typography } from '@mui/material';
import { IJobAd } from 'common/types';
import { jobAd as strings } from 'common/constants';
import { dateFunctions } from 'common/utils';
import {
  BookmarkBorderOutlined,
  ShareOutlined,
  Star,
  WarningAmberOutlined,
} from '@mui/icons-material';

type Props = {
  jobAd: IJobAd;
};

const JobAd = ({ jobAd }: Props) => {
  return (
    <>
      {/* Ad Actions */}
      <Stack
        mb={2}
        flexDirection={{ xs: 'column', sm: 'row' }}
        rowGap={1}
        justifyContent="space-between"
      >
        <Box>
          <IconButton color="primary" size="small" aria-label={strings.report_btn}>
            <WarningAmberOutlined />
          </IconButton>
          <IconButton color="primary" size="small" aria-label={strings.save_btn}>
            <BookmarkBorderOutlined />
          </IconButton>
          <IconButton color="primary" size="small" aria-label={strings.share_btn}>
            <ShareOutlined />
          </IconButton>
        </Box>
        <Stack flexDirection="row" gap={1}>
          <Button size="medium" variant="outlined" color="warning">
            {strings.be_first_btn}
          </Button>
          <Button size="medium">{strings.apply_btn}</Button>
        </Stack>
      </Stack>

      {/* Ad Info */}

      <Typography variant="h2" component="h4" color="primary">
        {jobAd.title}
      </Typography>

      <Stack flexDirection="row" gap={2}>
        <Typography variant="h6">{jobAd.persona}</Typography>

        <Stack flexDirection="row" alignItems="center" columnGap={0.5}>
          <Star color="warning" />
          <Typography variant="body2">{jobAd.calification}</Typography>
        </Stack>
      </Stack>

      <Stack flex={1} mb={3} flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" columnGap={1} alignItems="center">
          <Typography variant="body2">Hace 1 semana</Typography>
          <Typography variant="body2">• 7 solicitudes</Typography>
          <Typography variant="body2">• {jobAd.location}</Typography>
        </Stack>

        <Typography variant="caption">{`${
          strings.expires_in
        } ${dateFunctions.fromNow(jobAd.expiration_date)}`}</Typography>
      </Stack>

      <Box mb={3}>
        <Typography>{jobAd.description}</Typography>
      </Box>

      {/* TODO: Ad images */}

      {/* Ad tags */}

      {jobAd.tags ? (
        <Stack columnGap={1} flexDirection="row" alignItems="center">
          <Typography color="primary" fontWeight={600}>
            {strings.tags_lbl}
          </Typography>
          {jobAd.tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </Stack>
      ) : null}
    </>
  );
};

export default JobAd;
