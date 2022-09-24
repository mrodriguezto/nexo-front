import { Box, Button, Stack, TextField } from '@mui/material';
import { newPasswordForm as strings } from '../strings';

const NewPasswordForm = () => {
  return (
    <Stack spacing={4}>
      <TextField label={strings.inputs.new_password_lbl} />
      <TextField label={strings.inputs.confirm_password_lbl} />
      <Box sx={{ display: 'flex', flex: 1 }} />
      <Button>{strings.btns.change_password}</Button>
    </Stack>
  );
};

export default NewPasswordForm;
