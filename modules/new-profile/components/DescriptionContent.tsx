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
import TipPopover from 'common/components/Popover/TipPopover';

const MAX_CHARS = 800;

const DescriptionContent = () => {
  return (
    <Box>
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
              md: 'none',
            }}
            sx={{
              position: 'absolute',
              top: -20,
              right: 0,
            }}
          >
            <TipPopover>
              <Typography variant="body2">{strings.example_description}</Typography>
            </TipPopover>
          </Box>
          <TextField multiline rows={7} placeholder={strings.placeholder} />
          <MaxCharsText variant="caption" color="gray">
            0/{MAX_CHARS}
          </MaxCharsText>
        </Box>

        <Box
          marginTop={12}
          display={{
            xs: 'block',
            md: 'none',
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

export default DescriptionContent;
