import { Box, Button, Stack, TextField } from '@mui/material';
import { enterEmailForm as strings } from '../strings';
import { useForm } from 'react-hook-form';
import { resetPasswordResolver } from '../utils';

type FormData = {
  email: string;
};

const SendEmailForm = () => {
  const { formState: { errors, isValid }, register, handleSubmit } = useForm<FormData>({
    resolver: resetPasswordResolver,
    mode: 'onChange',
  }); // prettier-ignore

  const onSend = (data: FormData) => {
    if (!isValid) return;
    try {
      // TODO: Request for resending the confirmation email
      // await sendEmail()
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSend)}>
      <Stack spacing={4}>
        <TextField
          {...register('email')}
          label={strings.inputs.email_lbl}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <Box sx={{ display: 'flex', flex: 1 }} />
        <Button type="submit">{strings.btns.send_link}</Button>
      </Stack>
    </form>
  );
};

export default SendEmailForm;
