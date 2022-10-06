import { useEffect } from 'react';
import { Box, Button, Typography, Grid, TextField, IconButton } from '@mui/material';
import { AddAPhoto } from '@mui/icons-material';
import { withStyles } from 'tss-react/mui';

import { basicInfoContent as strings } from '../strings';
import FadeIn from 'common/components/Transition/FadeIn';
import { Controller, useForm } from 'react-hook-form';
import { basicInfoResolver } from '../utils';
import { useAppDispatch, useAppSelector } from 'store';
import { updateBasicInfo, updateCanContinue, updateStep } from '../state';
import TipPopover from 'common/components/Popover/TipPopover';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

type FormData = {
  display_name: string;
  title: string;
  location: string;
  birthday: string;
};

const BasicInfoContent = () => {
  const initialValues = useAppSelector((state) => state.newProfile.profile);
  const { register, formState: {errors, isValid}, watch, control} = useForm<FormData>({
    defaultValues: initialValues,
    resolver: basicInfoResolver,
    mode: 'onChange',
  }); // prettier-ignore
  const dispatch = useAppDispatch();
  const canContinue = useAppSelector((state) => state.newProfile.canContinue);

  useEffect(() => {
    const subscription = watch((values) => {
      dispatch(updateBasicInfo(values));
    });

    return () => subscription.unsubscribe();
  }, [dispatch, errors, watch]);

  useEffect(() => {
    if (isValid) dispatch(updateCanContinue(true));
    else dispatch(updateCanContinue(false));
  }, [isValid, dispatch]);

  const handleNextStep = () => {
    if (!canContinue) return;

    dispatch(updateStep('next'));
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
        <UploadImageButton>
          <AddAPhoto fontSize="large" color="inherit" />
        </UploadImageButton>
      </Box>

      <Grid
        container
        rowSpacing={{
          xs: 2,
          md: 5,
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
                <Box>
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
          <TextField
            label={strings.inputs.location_lbl}
            {...register('location')}
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
          <Button onClick={handleNextStep} fullWidth disabled={!canContinue}>
            {strings.next_step_btn}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const UploadImageButton = withStyles(IconButton, (theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '120px',
    height: '120px',
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },
}));

export default BasicInfoContent;
