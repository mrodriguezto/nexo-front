import { Box, Button, Stack, TextField } from '@mui/material';
import { enterEmailForm as strings } from '../strings';

const SendEmailForm = () => {
  return (
    <Stack spacing={4}>
      <TextField label={strings.inputs.email_lbl} />
      <Box sx={{ display: 'flex', flex: 1 }} />
      <Button>{strings.btns.send_link}</Button>
    </Stack>
  );
};

export default SendEmailForm;
