import { Box, Stack } from '@mui/material';

import SimpleUserStackedLayout from '@/layouts/SimpleUserStackedLayout';
import {
  BeginContent,
  BeginSideinfo,
  NewAdContent,
  NewAdSideinfo,
} from '@/new-job-ad/components';
import { newJobAdPage as strings } from '@/new-job-ad/strings';
import FadeIn from 'common/components/Transition/FadeIn';
import { useAppSelector } from 'store';

type Step = {
  content: React.ReactNode;
  sideinfo: React.ReactNode;
};

const stepsComponent: Step[] = [
  {
    content: <BeginContent />,
    sideinfo: <BeginSideinfo />,
  },
  {
    content: <NewAdContent />,
    sideinfo: <NewAdSideinfo />,
  },
];

const NewJobAdPage = () => {
  const currentStep = useAppSelector((state) => state.newJobAd.step);

  const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <Stack
        justifyContent={currentStep === 0 ? 'center' : 'flex-start'}
        paddingY={4}
        height="100%"
      >
        <FadeIn>
          <Box>{children}</Box>
        </FadeIn>
      </Stack>
    );
  };

  return (
    <SimpleUserStackedLayout
      pageTitle={strings.title}
      pageDescription={strings.description}
      mainContent={
        <MainContentWrapper>{stepsComponent[currentStep].content}</MainContentWrapper>
      }
      sideinfo={stepsComponent[currentStep].sideinfo}
    />
  );
};

export default NewJobAdPage;
