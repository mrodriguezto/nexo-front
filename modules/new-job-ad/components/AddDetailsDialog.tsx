import { useState } from 'react';
import {
  Dialog,
  Box,
  DialogTitle,
  Typography,
  IconButton,
  DialogContent,
  Stack,
  TextField,
  DialogActions,
  Button,
  ButtonBase,
  Chip,
} from '@mui/material';
import {
  CalendarMonth,
  Close,
  LocationOnOutlined,
  SellOutlined,
} from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import { useForm } from 'react-hook-form';
import { withStyles } from 'tss-react/mui';
import dayjs from 'dayjs';

import LocationAutocomplete from 'common/components/Autocomplete/LocationAutocomplete';
import TagsAutoComplete from 'common/components/Autocomplete/TagsAutocomplete';
import TipPopover from 'common/components/Popover/TipPopover';
import { PlaceType } from 'common/types';
import { topics, disciplines, keywords } from 'common/constants';
import { dateFunctions } from 'common/utils';
import { useToggle } from 'common/hooks';
import { useAppDispatch, useAppSelector } from 'store';

import { adDescriptionField as strings } from '../strings';
import { updateExtraInfo } from '../state';
import { extraInfoResolver } from '../utils';
import { INewJobAdExtraInfo } from '../types';

type FormData = {
  tags: string[];
  location: string;
  expiration_date: string;
};

const AddDetailsDialog = () => {
  const initialValues = useAppSelector((state) => state.newJobAd.ad);
  const { isActive, toggle } = useToggle(false);

  const [tempData, setTempData] = useState<INewJobAdExtraInfo>({
    tags: initialValues.tags,
    expiration_date: initialValues.expiration_date,
    location: initialValues.location,
  });

  const { formState: {errors, isValid}, setValue} = useForm<FormData>({
    defaultValues: {...initialValues, location: initialValues.location?.description},
    mode: 'onChange',
    resolver: extraInfoResolver
  }); // prettier-ignore

  const dispatch = useAppDispatch();

  const handleTagsUpdate = (values: string[]) => {
    setValue('tags', values);
    setTempData((prev) => ({ ...prev, tags: [...values] }));
  };

  const handleLocationUpdate = (location: PlaceType | null) => {
    if (!location) return;

    setValue('location', location.description, { shouldValidate: true });
    setTempData((prev) => ({ ...prev, location }));
  };

  const handleDateUpdate = (value: string | null) => {
    const formattedDate = dayjs(value).format();

    setValue('expiration_date', formattedDate, {
      shouldValidate: true,
    });
    setTempData((prev) => ({ ...prev, expiration_date: formattedDate }));
  };

  const handleSaveExtraInfo = () => {
    dispatch(updateExtraInfo({ ...tempData }));
    toggle(false);
  };

  const hasExtraInfo = Boolean(
    initialValues.tags.length > 0 ||
      initialValues.location ||
      initialValues.expiration_date.length > 0,
  );

  return (
    <>
      <ExtraInputsButton onClick={() => toggle(true)}>
        {hasExtraInfo ? (
          <Stack spacing={1}>
            <Stack flexDirection="row" columnGap={1}>
              <SellOutlined />
              <Stack gap={1} flexDirection="row" flexWrap="wrap">
                {initialValues.tags.map((tag) => (
                  <Chip key={tag} label={tag} />
                ))}
              </Stack>
            </Stack>
            <Stack flexDirection="row" columnGap={1}>
              <LocationOnOutlined />
              <Typography variant="body2" color="primary">
                {initialValues.location?.description}
              </Typography>
            </Stack>
            <Stack flexDirection="row" columnGap={1}>
              <CalendarMonth />
              <Typography variant="body2" color="primary">
                {initialValues.expiration_date
                  ? dateFunctions.format(initialValues.expiration_date)
                  : ''}
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
      <Dialog open={isActive} onClose={() => toggle(false)} fullWidth maxWidth="md">
        <Box paddingX={2} paddingY={4}>
          <DialogTitle marginBottom={3}>
            <Typography color="primary" variant="h2" component="h3">
              Agregar detalles
            </Typography>
            <IconButton
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
              }}
              onClick={() => toggle(false)}
            >
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Stack gap={4}>
              <Stack position="relative">
                <Box display="flex" justifyContent="flex-end">
                  <TipPopover
                    anchorOrigin={{ vertical: 'center', horizontal: -8 }}
                    transformOrigin={{ vertical: 24, horizontal: 'right' }}
                  >
                    <Typography maxWidth={300} variant="body2" color="black">
                      {strings.tags_tip}
                    </Typography>
                  </TipPopover>
                </Box>
                <TagsAutoComplete
                  label="Agrega tags"
                  maxTags={5}
                  freeSolo
                  minTags={1}
                  initialValues={tempData.tags}
                  onUpdate={handleTagsUpdate}
                  options={[...topics, ...disciplines, ...keywords]}
                  error={Boolean(errors.tags)}
                  helperText={errors.tags?.message}
                />
                <Typography
                  sx={{ position: 'absolute', right: 0, bottom: -18 }}
                  variant="caption"
                >
                  {strings.max_tags}
                </Typography>
              </Stack>
              <LocationAutocomplete
                id="job-ad-location"
                label="Ubicación"
                initialValue={tempData.location}
                updateValue={handleLocationUpdate}
                error={Boolean(errors.location)}
                helperText={errors.location?.message}
              />
              <Box>
                <Box display="flex" justifyContent="flex-end">
                  <TipPopover
                    anchorOrigin={{ vertical: 'center', horizontal: -8 }}
                    transformOrigin={{ vertical: 24, horizontal: 'right' }}
                  >
                    <Typography maxWidth={300} variant="body2" color="black">
                      {strings.expiration_tip}
                    </Typography>
                  </TipPopover>
                </Box>
                <DatePicker
                  value={tempData.expiration_date}
                  onChange={handleDateUpdate}
                  label="Fecha de vencimiento"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="expiration_date"
                      name="expiration_date"
                      helperText={errors.expiration_date?.message}
                      error={Boolean(errors.expiration_date)}
                    />
                  )}
                />
              </Box>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSaveExtraInfo}>{strings.save_btn}</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
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

export default AddDetailsDialog;
