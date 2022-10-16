import { useState } from 'react';
import { Box, IconButton, Popover } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Close } from '@mui/icons-material';
import { withStyles } from 'tss-react/mui';

type Props = {
  id?: string;
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
  id = 'tip-popover',
  children,
  anchorOrigin = { horizontal: 'right', vertical: 'center' },
  transformOrigin = {
    vertical: 12,
    horizontal: -16,
  },
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const ID = open ? id : undefined;

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        onClick={handleOpen}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        sx={{ padding: 0 }}
      >
        <InfoIcon color="secondary" />
      </IconButton>
      <Popover
        id={ID}
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        elevation={2}
        disableRestoreFocus
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
