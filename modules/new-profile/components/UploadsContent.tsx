import { useRef, useState } from 'react';
import NextLink from 'next/link';
import {
  Box,
  Button,
  ButtonBase,
  IconButton,
  Link,
  Paper,
  Popover,
  Stack,
  Typography,
} from '@mui/material';
import { uploadsContent as strings } from '../strings';
import { withStyles } from 'tss-react/mui';
import { AddCircleOutline, Info } from '@mui/icons-material';

const UploadsContent = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Typography
        variant="h2"
        component="h1"
        color="primary"
        fontWeight={600}
        maxWidth={700}
      >
        {strings.title}
      </Typography>
      <Box maxWidth={600}>
        <Box marginY={4}>
          <Typography variant="body1">{strings.info}</Typography>
        </Box>
        <Box position="relative">
          <Box
            display={{
              xs: 'block',
              sm: 'none',
            }}
            sx={{
              position: 'absolute',
              top: -20,
              right: 0,
            }}
          >
            <IconButton onClick={handleClick} sx={{ padding: 0 }}>
              <Info color="secondary" />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: -16,
              }}
              elevation={2}
            >
              <PopoverText
                maxWidth={300}
                variant="body2"
                sx={{ p: 2, backgroundColor: 'warning' }}
              >
                {strings.popover.desc}
              </PopoverText>
            </Popover>
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
        </Box>

        <Box
          marginTop={12}
          display={{
            xs: 'block',
            sm: 'none',
          }}
        >
          <Button fullWidth>{strings.next_step_btn}</Button>
        </Box>

        <Box
          marginTop={2}
          textAlign={{
            xs: 'center',
            sm: 'left',
          }}
        >
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

const PopoverText = withStyles(Typography, (theme) => ({
  root: {
    backgroundColor: theme.palette.warning.main,
  },
}));

export default UploadsContent;
