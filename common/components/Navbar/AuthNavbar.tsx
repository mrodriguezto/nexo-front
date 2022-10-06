import { AppBar, Box, Container, Toolbar } from '@mui/material';
import Image from 'next/image';

const AuthNavbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: {
          xs: '60px',
          md: '88px',
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              width: {
                xs: 40,
                sm: 50,
              },
              height: {
                xs: 40,
                sm: 50,
              },
            }}
          >
            <Image
              src="/images/nexo-isotipo.svg"
              width="100%"
              height="100%"
              alt="Nexo logo"
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AuthNavbar;
