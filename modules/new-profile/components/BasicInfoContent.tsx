import { useEffect } from 'react';
import { Box, Typography, Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import TipPopover from 'common/components/Popover/TipPopover';
import { basicInfoContent as strings } from '../strings';
import { basicInfoResolver } from '../utils';
import { useAppDispatch, useAppSelector } from 'store';
import { updateBasicInfo } from '../state';
import NextStepButton from './NextStepButton';
import LocationAutocomplete from 'common/components/Autocomplete/LocationAutocomplete';
import { PlaceType } from 'common/types';
import ProfileImageUploader from './ProfileImageUploader';

type FormData = {
  display_name: string;
  title: string;
  location: string;
  birthday: string;
};

const BasicInfoContent = () => {
  const initialValues = useAppSelector((state) => state.newProfile.profile);
  const { register, formState: {errors, isValid}, watch, control, setValue, getValues} = useForm<FormData>({
    defaultValues: {...initialValues, location: initialValues.location?.description},
    resolver: basicInfoResolver,
    mode: 'onChange',
  }); // prettier-ignore
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscription = watch((values) => {
      dispatch(updateBasicInfo({ ...values, location: initialValues.location }));
    });

    return () => subscription.unsubscribe();
  }, [dispatch, watch, initialValues]);

  const handleLocationUpdate = (location: PlaceType | null) => {
    if (!location) return;

    setValue('location', location.description, { shouldValidate: true });
    dispatch(updateBasicInfo({ ...getValues(), location: location }));
  };

  return (
    <Box>
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title}
      </Typography>
      <Box marginY={4}>
        <Typography variant="body1">{strings.info}</Typography>
      </Box>
      <Box marginY={4} textAlign="center" display={{ xs: 'block', md: 'none' }}>
        <ProfileImageUploader />
      </Box>

      <Grid
        container
        rowSpacing={{
          xs: 3,
          md: 4,
        }}
        columnSpacing={2}
        maxWidth={600}
      >
        <Grid xs={12} md={6} item>
          <TextField
            label={strings.inputs.card_name_lbl}
            {...register('display_name')}
            error={Boolean(errors.display_name)}
            helperText={errors.display_name?.message}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField
            label={strings.inputs.current_title_lbl}
            InputProps={{
              endAdornment: (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -28,
                    right: 0,
                  }}
                >
                  <TipPopover>
                    <Typography variant="body2">
                      {strings.inputs.current_title_popover}
                    </Typography>
                  </TipPopover>
                </Box>
              ),
            }}
            {...register('title')}
            error={Boolean(errors.title)}
            helperText={errors.title?.message}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <LocationAutocomplete
            initialValue={initialValues.location}
            id="user-location-autocomplete"
            label={strings.inputs.location_lbl}
            updateValue={handleLocationUpdate}
            error={Boolean(errors.location)}
            helperText={errors.location?.message}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Controller
            control={control}
            name="birthday"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <DatePicker
                value={value}
                onChange={(value) => onChange(dayjs(value).format())}
                label={strings.inputs.bday_lbl}
                renderInput={(params) => (
                  <TextField
                    helperText={error?.message}
                    id="birthday"
                    name="birthday"
                    {...params}
                    error={Boolean(error)}
                  />
                )}
              />
            )}
          />

          <Typography variant="caption">
            (**) Tu edad no se mostrará en el perfil
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display={{
            xs: 'block',
            md: 'none',
          }}
        >
          <NextStepButton isValid={isValid} btnLabel={strings.next_step_btn} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicInfoContent;
