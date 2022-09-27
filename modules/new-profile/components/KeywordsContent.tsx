import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import {
  Box,
  Button,
  Chip,
  IconButton,
  Popover,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { withStyles } from 'tss-react/mui';
import { keywordsContent as strings } from '../strings';
import { Add } from '@mui/icons-material';

const KeywordsContent = () => {
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
      <Typography variant="h2" component="h1" color="primary" fontWeight={600}>
        {strings.title}
      </Typography>
      <Box maxWidth={600}>
        <Box marginY={4}>
          <Typography variant="body1">{strings.info}</Typography>
        </Box>
        <Box maxWidth={520}>
          <TextField
            placeholder={strings.placeholder}
            InputProps={{
              endAdornment: (
                <>
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
                    <PopoverWrapper padding={2}>
                      <Typography variant="h3" marginBottom={2}>
                        {strings.popover_title}
                      </Typography>
                      <Typography maxWidth={300} variant="body2">
                        {strings.popover_text}
                      </Typography>
                    </PopoverWrapper>
                  </Popover>
                </>
              ),
            }}
          />
          <Typography display="block" textAlign="right" variant="caption">
            {strings.info_max}
          </Typography>
        </Box>

        <Box marginTop={4}>
          <Typography variant="h6" gutterBottom>
            {strings.tags_subtitle}
          </Typography>
          <Stack flexDirection="row" gap={1} flexWrap="wrap">
            {strings.suggested_tags.map((tag) => (
              <Chip key={tag} label={tag} deleteIcon={<Add />} onDelete={() => {}} />
            ))}
          </Stack>
        </Box>
        <Box
          marginTop={16}
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

const PopoverWrapper = withStyles(Box, (theme) => ({
  root: {
    backgroundColor: theme.palette.warning.main,
  },
}));

export default KeywordsContent;
