import { ButtonBase } from '@mui/material';
import { useRef } from 'react';
import { withStyles } from 'tss-react/mui';

type Props = {
  children: React.ReactElement;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  multiple?: boolean;
  width?: number | string;
  height?: number | string;
};

const UploaderButton = ({
  children,
  onChange,
  accept,
  multiple = false,
  height,
  width,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Uploader
        sx={{
          height: height || '150px',
          width: width || '180px',
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        {children}
      </Uploader>
      <input
        accept={accept}
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={onChange}
        multiple={multiple}
      />
    </>
  );
};

const Uploader = withStyles(ButtonBase, (theme) => ({
  root: {
    backgroundColor: '#8C7CCA24',

    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export default UploaderButton;
