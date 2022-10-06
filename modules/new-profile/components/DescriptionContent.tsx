import { Box, Button, TextField, Typography } from '@mui/material';

import { withStyles } from 'tss-react/mui';
import { descriptionContent as strings } from '../strings';
import TipPopover from 'common/components/Popover/TipPopover';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store';
import { descriptionResolver } from '../utils';
import { useEffect } from 'react';
import { updateBio, updateCanContinue, updateStep } from '../state';

const MAX_CHARS = 800;

type FormData = {
  description: string;
};

const DescriptionContent = () => {
  const currentDescription = useAppSelector(
    (state) => state.newProfile.profile.biography,
  );
  const canContinue = useAppSelector((state) => state.newProfile.canContinue);
  const dispatch = useAppDispatch();

  const { register, formState: { errors, isValid }, watch, } = useForm({
    defaultValues: {
      description: currentDescription,
    },
    resolver: descriptionResolver,
    mode: "onChange"
  }); // prettier-ignore

  useEffect(() => {
    const subscription = watch(({ description }) => {
      dispatch(updateBio(description || ''));
    });

    return () => subscription.unsubscribe();
  }, [dispatch, watch]);

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
      <Box maxWidth={650}>
        <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
          {strings.title}
        </Typography>

        <Box marginTop={3} marginBottom={2}>
          <Typography variant="body1">{strings.info}</Typography>
        </Box>
        <Box position="relative">
          <Box
            display={{
              xs: 'flex',
              md: 'none',
            }}
            justifyContent="flex-end"
          >
            <TipPopover>
              <Typography variant="body2">{strings.example_description}</Typography>
            </TipPopover>
          </Box>
          <MaxCharsText variant="caption" color="gray">
            {currentDescription.length}/{MAX_CHARS}
          </MaxCharsText>
          <TextField
            {...register('description')}
            multiline
            rows={7}
            label={strings.placeholder}
            error={Boolean(errors.description)}
            helperText={errors.description?.message || ' '}
          />
        </Box>

        <Box
          marginTop={12}
          display={{
            xs: 'block',
            md: 'none',
          }}
        >
          <Button onClick={handleNextStep} disabled={!canContinue} fullWidth>
            {strings.next_step_btn}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const MaxCharsText = withStyles(Typography, () => ({
  root: {
    position: 'absolute',
    right: '1em',
    bottom: '3em',
  },
}));

export default DescriptionContent;
