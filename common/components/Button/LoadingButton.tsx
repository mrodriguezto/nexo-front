import { Box, Button, CircularProgress, ButtonProps } from '@mui/material';

type CustomProps = {
  loading?: boolean;
};

type Props = ButtonProps & CustomProps;

const LoadingButton = ({
  children,
  loading = false,
  onClick,
  type = 'button',
  variant = 'contained',
  color = 'primary',
  size,
}: Props) => {
  return (
    <Button
      variant={variant}
      size={size}
      type={type}
      onClick={loading ? undefined : onClick}
      disabled={loading}
      color={color}
    >
      {loading ? <CircularProgress size={22} sx={{ position: 'absolute' }} /> : null}
      <Box
        sx={{
          visibility: loading ? 'hidden' : 'visible',
        }}
      >
        {children}
      </Box>
    </Button>
  );
};

export default LoadingButton;
