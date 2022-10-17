import SimpleUserLayout from '@/layouts/SimpleUserLayout';
import {
  BeginContent,
  BeginSideinfo,
  NewAdContent,
  NewAdSideinfo,
} from '@/new-job-ad/components';
import { newJobAdPage as strings } from '@/new-job-ad/strings';
import { Box, Stack } from '@mui/material';
import FadeIn from 'common/components/Transition/FadeIn';
import { useState } from 'react';

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
  const [currentStep, setCurrentStep] = useState(1);

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
    <SimpleUserLayout
      pageTitle={strings.title}
      pageDescription={strings.description}
      mainContent={
        <MainContentWrapper>
          {stepsComponent[currentStep].content}
        </MainContentWrapper>
      }
      sideinfo={stepsComponent[currentStep].sideinfo}
    />
  );
};

export default NewJobAdPage;
