import { CheckBox } from '@mui/icons-material';
import { Typography, Button, TextField, Chip, Box } from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Typography variant="h1">Titulo</Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit,
        laboriosam minima delectus quod omnis alias beatae in. Vel accusamus expedita
        cum alias ab dignissimos fuga accusantium beatae consequatur modi?
      </Typography>
      <TextField variant="outlined" label="Nombres" />
      <Chip variant="filled" label="Tag" color="primary" onDelete={() => {}} />
      <Box sx={{ heigth: '100vh', padding: '500px 0' }}>
        <Image src="/images/isotipo.svg" alt="Logo" width="100%" height="100%" />
      </Box>
    </>
  );
};

export default Home;
