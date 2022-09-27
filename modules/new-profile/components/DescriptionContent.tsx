import {
  Box,
  Button,
  IconButton,
  Popover,
  TextField,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import { useState } from 'react';
import { withStyles } from 'tss-react/mui';
import { descriptionContent as strings } from '../strings';

const MAX_CHARS = 800;

const DescriptionContent = () => {
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
    <Box
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Box maxWidth={650}>
        <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
          {strings.title}
        </Typography>

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
              <InfoIcon color="secondary" />
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
                {strings.example_description}
              </PopoverText>
            </Popover>
          </Box>
          <TextField multiline rows={4} placeholder={strings.placeholder} />
          <MaxCharsText variant="caption" color="gray">
            0/{MAX_CHARS}
          </MaxCharsText>
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
      </Box>
    </Box>
  );
};

const MaxCharsText = withStyles(Typography, () => ({
  root: {
    position: 'absolute',
    bottom: '1em',
    right: '1em',
  },
}));

const PopoverText = withStyles(Typography, (theme) => ({
  root: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.secondary.main,
  },
}));

export default DescriptionContent;
