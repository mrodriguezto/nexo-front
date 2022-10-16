import { Box, Typography } from '@mui/material';
import { registerContent as strings } from '../strings';
import RegisterForm from './RegisterForm';

const RegisterContent = () => {
  return (
    <Box maxWidth={700}>
      <Typography
        variant="h1"
        color="primary"
        textTransform="uppercase"
        textAlign={{
          xs: 'center',
          sm: 'left',
        }}
      >
        {strings.title}
      </Typography>
      <RegisterForm />
    </Box>
  );
};

export default RegisterContent;
