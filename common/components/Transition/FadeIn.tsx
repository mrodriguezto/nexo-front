import { Fade } from '@mui/material';
import { useIsMounted } from 'common/hooks';

const FadeIn = ({ children }: { children: JSX.Element }) => {
  const isMounted = useIsMounted();

  return (
    <Fade in={isMounted} unmountOnExit>
      {children}
    </Fade>
  );
};

export default FadeIn;
