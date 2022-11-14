import { useState } from 'react';
import { SxProps, Theme, Typography } from '@mui/material';

const MAX_CHARS = 300;

type Props = {
  content: string;
  variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline"; // prettier-ignore
  sx?: SxProps<Theme>;
};

const ReadMoreText = ({ content, variant = 'body1', sx }: Props) => {
  const [isExpanded, setIsExpanded] = useState(content.length <= MAX_CHARS);

  if (isExpanded) {
    return (
      <Typography sx={sx} variant={variant}>
        {content}
      </Typography>
    );
  }

  return (
    <>
      <Typography sx={sx} variant={variant} display="inline">
        {`${content.slice(0, MAX_CHARS)}... `}
      </Typography>
      <Typography
        display="inline"
        color="primary"
        fontWeight={600}
        sx={{
          cursor: 'pointer',
        }}
        variant={variant}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        Ver más
      </Typography>
    </>
  );
};

export default ReadMoreText;
