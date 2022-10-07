import { useState } from 'react';
import { Box, IconButton, Popover } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Close } from '@mui/icons-material';
import { withStyles } from 'tss-react/mui';

type Props = {
  children: React.ReactNode;
  anchorOrigin?: {
    horizontal: number | 'left' | 'right' | 'center';
    vertical: number | 'center' | 'top' | 'bottom';
  };
  transformOrigin?: {
    horizontal: number | 'left' | 'right' | 'center';
    vertical: number | 'center' | 'top' | 'bottom';
  };
};

const TipPopover = ({
  children,
  anchorOrigin = { horizontal: 'right', vertical: 'center' },
  transformOrigin = {
    vertical: 12,
    horizontal: -16,
  },
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleOpen} sx={{ padding: 0 }}>
        <InfoIcon color="secondary" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        elevation={2}
      >
        <IconButton
          size="small"
          sx={{ position: 'absolute', right: 0 }}
          onClick={handleClose}
          aria-label="Cerrar tip"
        >
          <Close fontSize="small" />
        </IconButton>
        <PopoverContent
          maxWidth={{
            sx: 'auto',
            sm: 500,
            md: 300,
          }}
          paddingX={2}
          paddingY={3}
        >
          {children}
        </PopoverContent>
      </Popover>
    </>
  );
};

const PopoverContent = withStyles(Box, (theme) => ({
  root: {
    backgroundColor: theme.palette.warning.main,
  },
}));

export default TipPopover;
