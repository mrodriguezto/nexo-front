import { Box, Button, CircularProgress } from '@mui/material';

type Props = {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'large' | 'medium';
};

const LoadingButton = ({
  children,
  loading = false,
  onClick = () => {},
  type = 'button',
  size,
}: Props) => {
  const handleClick = () => {
    if (loading) return;

    onClick();
  };

  return (
    <Button size={size} type={type} onClick={handleClick} disabled={loading}>
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
