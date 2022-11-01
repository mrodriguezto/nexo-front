import { useEffect } from 'react';
import { Box, InputBase, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { withStyles } from 'tss-react/mui';
import { adDescriptionField as strings } from '../strings';
import AddDetailsDialog from './AddDetailsDialog';
import { useAppDispatch } from 'store';
import { updateDesc, updateIsValid } from '../state';
import { descResolver } from '../utils';

type FormData = {
  title: string;
  description: string;
};

const AdDescriptionField = () => {
  const dispatch = useAppDispatch();

  const { register, formState: {errors, isValid}, watch} = useForm<FormData>({
    mode: 'onChange',
    resolver: descResolver
  }); // prettier-ignore

  useEffect(() => {
    const subscription = watch((values) => {
      dispatch(updateDesc({ ...values }));
    });

    return () => subscription.unsubscribe();
  }, [dispatch, watch]);

  useEffect(() => {
    dispatch(updateIsValid(isValid));
  }, [dispatch, isValid]);

  return (
    <Box>
      <Box paddingLeft={1.5} marginBottom={1}>
        <Typography id="persona-select">{strings.ad_lbl}</Typography>
      </Box>
      <ComposedInputBox>
        <Stack>
          <TitleInput placeholder={strings.title_lbl} {...register('title')} />

          <DescriptionInput
            multiline
            rows={8}
            placeholder={strings.description_lbl}
            {...register('description')}
          />

          <AddDetailsDialog />
        </Stack>
      </ComposedInputBox>
    </Box>
  );
};

const TitleInput = withStyles(InputBase, (theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.h3.fontFamily,
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 700,
    '& input': {
      textTransform: 'uppercase',
      '&::placeholder': {
        color: 'black',
      },
    },
  },
}));

const DescriptionInput = withStyles(InputBase, (theme) => ({
  root: {
    fontSize: theme.typography.body2.fontSize,
  },
}));

const ComposedInputBox = withStyles(Box, (theme) => ({
  root: {
    border: '1px solid #cfcfcf',
    borderRadius: 5,
    padding: '1em',
    ':hover': {
      borderColor: 'black',
    },
    ':focus-within': {
      borderColor: theme.palette.primary.main,
      outline: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));

export default AdDescriptionField;
