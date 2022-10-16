import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import { newPasswordForm as strings } from '../strings';
import { useForm } from 'react-hook-form';
import { newPasswordResolver } from '../utils';
import { useToggle } from 'common/hooks';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type FormData = {
  password: string;
  confirmPassword: string;
};

const NewPasswordForm = () => {
  const { register, formState: { errors, isValid }, handleSubmit } = useForm<FormData>({
    resolver: newPasswordResolver,
  }); // prettier-ignore
  const { isActive: isPasswordVisible, toggle: togglePasswordVisibility } =
    useToggle();

  const createNewPassword = () => {
    if (!isValid) return;
  };

  return (
    <form onSubmit={handleSubmit(createNewPassword)}>
      <Stack spacing={4}>
        <TextField
          {...register('password')}
          type={isPasswordVisible ? 'text' : 'password'}
          label={strings.inputs.new_password_lbl}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisibility}
                size="small"
                sx={{ position: 'relative', left: 8 }}
              >
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
        <TextField
          {...register('confirmPassword')}
          type={isPasswordVisible ? 'text' : 'password'}
          label={strings.inputs.confirm_password_lbl}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword?.message}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisibility}
                size="small"
                sx={{ position: 'relative', left: 8 }}
              >
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
        <Box sx={{ display: 'flex', flex: 1 }} />
        <Button type="submit">{strings.btns.change_password}</Button>
      </Stack>
    </form>
  );
};

export default NewPasswordForm;
