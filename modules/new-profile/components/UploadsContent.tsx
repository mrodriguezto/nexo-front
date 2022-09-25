import { useRef } from 'react';
import NextLink from 'next/link';
import {
  Box,
  Button,
  ButtonBase,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { uploadsContent as strings } from '../strings';
import { withStyles } from 'tss-react/mui';
import { AddCircleOutline } from '@mui/icons-material';

const UploadsContent = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Box
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title}
      </Typography>
      <Box maxWidth={600}>
        <Box marginY={4}>
          <Typography variant="body1">{strings.info}</Typography>
        </Box>

        <Stack
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
          alignItems="center"
        >
          <Uploader onClick={() => fileInputRef.current?.click()}>
            <AddCircleOutline color="inherit" />
            <Typography
              variant="caption"
              color="primary"
              fontWeight={500}
              marginTop={2}
            >
              {strings.upload_field_lbl}
            </Typography>
          </Uploader>
          <input
            accept="video/*, image/*"
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
        </Stack>

        <Box
          marginTop={12}
          display={{
            xs: 'block',
            sm: 'none',
          }}
        >
          <Button fullWidth>{strings.next_step_btn}</Button>
        </Box>

        <Box marginTop={4}>
          <NextLink href="/" passHref>
            <Link>{strings.do_later_link}</Link>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

const Uploader = withStyles(ButtonBase, (theme) => ({
  root: {
    backgroundColor: '#8C7CCA24',
    padding: '3em 4em',
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export default UploadsContent;
