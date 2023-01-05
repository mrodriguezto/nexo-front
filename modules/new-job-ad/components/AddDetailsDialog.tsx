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
  useMediaQuery,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import { useForm } from 'react-hook-form';
import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';

import LocationAutocomplete from 'common/components/Autocomplete/LocationAutocomplete';
import TagsAutoComplete from 'common/components/Autocomplete/TagsAutocomplete';
import TipPopover from 'common/components/Popover/TipPopover';
import { PlaceType } from 'common/types';
import { topics, disciplines, keywords } from 'common/constants';
import { useAppDispatch, useAppSelector } from 'store';

import { adDescriptionField as strings } from '../strings';
import { toggleDetailsDialog, updateExtraInfo } from '../state';
import { extraInfoResolver } from '../utils';
import { INewJobAdExtraInfo } from '../types';
import AddDetailsButtons from './AddDetailsButtons';

type FormData = {
  tags: string[];
  location: string;
  expiration_date: string;
};

const AddDetailsDialog = () => {
  const initialValues = useAppSelector((state) => state.newJobAd.ad);
  const isOpened = useAppSelector((state) => state.newJobAd.isDetailsDialogOpened);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
    if (!value) return;

    if (!dayjs(value).isValid()) return;

    const formattedDate = dayjs(value).format();

    setValue('expiration_date', formattedDate, {
      shouldValidate: true,
    });
    setTempData((prev) => ({ ...prev, expiration_date: formattedDate }));
  };

  const handleSaveExtraInfo = () => {
    dispatch(updateExtraInfo({ ...tempData }));
    dispatch(toggleDetailsDialog(false));
  };

  const handleCloseDialog = () => {
    dispatch(toggleDetailsDialog(false));
  };

  return (
    <>
      <AddDetailsButtons />
      <Dialog
        fullScreen={fullScreen}
        open={isOpened}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <Box
          paddingY={3}
          paddingX={{
            xs: 0,
            sm: 2,
          }}
        >
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
              onClick={handleCloseDialog}
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

export default AddDetailsDialog;
