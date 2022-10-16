import SimpleUserLayout from '@/layouts/SimpleUserLayout';
import {
  BeginContent,
  BeginSideinfo,
  NewAdContent,
  NewAdSideinfo,
} from '@/new-job-ad/components';
import { newJobAdPage as strings } from '@/new-job-ad/strings';
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
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <SimpleUserLayout
      pageTitle={strings.title}
      pageDescription={strings.description}
      mainContent={stepsComponent[currentStep].content}
      sideinfo={stepsComponent[currentStep].sideinfo}
    />
  );
};

export default NewJobAdPage;
