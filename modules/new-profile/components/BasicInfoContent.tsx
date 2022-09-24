import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  IconButton,
  Popover,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { withStyles } from 'tss-react/mui';

import { basicInfoContent as strings } from '../strings';

const BasicInfoContent = () => {
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
      <Typography variant="h1" color="primary" fontWeight={500}>
        {strings.title}
      </Typography>
      <Box marginY={4}>
        <Typography variant="body1">{strings.info}</Typography>
      </Box>

      <Grid
        container
        rowSpacing={{
          xs: 2,
          md: 5,
        }}
        columnSpacing={2}
        maxWidth={680}
      >
        <Grid xs={12} md={6} item>
          <TextField label={strings.inputs.card_name_lbl} />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField
            label={strings.inputs.current_title_lbl}
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
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    elevation={2}
                  >
                    <PopoverText
                      maxWidth={300}
                      variant="body2"
                      sx={{ p: 2, backgroundColor: 'warning' }}
                    >
                      {strings.inputs.current_title_popover}
                    </PopoverText>
                  </Popover>
                </>
              ),
            }}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField label={strings.inputs.location_lbl} />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField
            type="date"
            label={strings.inputs.bday_lbl}
            InputLabelProps={{ shrink: true }}
          />
          <Typography variant="caption">
            (**) Tu edad no se mostrará en el perfil
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display={{
            xs: 'block',
            sm: 'none',
          }}
        >
          <Button fullWidth>{strings.next_step_btn}</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const PopoverText = withStyles(Typography, (theme) => ({
  root: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.secondary.main,
  },
}));

export default BasicInfoContent;
