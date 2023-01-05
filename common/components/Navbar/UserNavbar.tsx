import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { Notifications, Search, Work } from '@mui/icons-material';
import Image from 'next/image';

const user = {
  name: 'Miguel Rodriguez',
  account_type: 'Cuenta free',
};

const UserNavbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: '55px',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              width: 40,
              height: 40,
            }}
          >
            <Image
              src="/images/logo/nexo-isotipo.svg"
              width="100%"
              height="100%"
              alt="Nexo logo"
            />
          </Box>
          {/* TODO: Search bar */}
          <Box
            marginLeft={4}
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
            }}
          >
            <IconButton sx={{ color: '#E7E7E7' }}>
              <Search fontSize="medium" color="inherit" />
            </IconButton>
          </Box>

          <Box flex={1} />

          <Stack
            flexDirection="row"
            columnGap={{
              xs: 1,
              sm: 2,
            }}
          >
            {/* User buttons */}
            <Stack
              flexDirection="row"
              columnGap={{
                xs: 0.5,
                sm: 1,
              }}
            >
              <IconButton color="primary">
                <Work />
              </IconButton>
              <IconButton color="primary">
                <Notifications />
              </IconButton>
            </Stack>
            <Stack>
              <Stack
                textAlign="right"
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'flex',
                  },
                }}
              >
                <Typography variant="body2" fontWeight={600}>
                  {user.name}
                </Typography>
                <Typography variant="caption">{user.account_type}</Typography>
              </Stack>

              {/* TODO: User image */}
              <Box></Box>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default UserNavbar;
