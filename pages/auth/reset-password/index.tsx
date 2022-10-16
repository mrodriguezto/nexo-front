import { useState } from 'react';
import type { NextPage } from 'next';

import SimpleLayout from '@/layouts/SimpleLayout';
import { resetPasswordPage as pageStrings } from '@/auth/strings';
import EnterEmailContent from '@/auth/components/EnterEmailContent';
import EnterEmailDecoration from '@/auth/components/EnterEmailDecoration';
import EmailSentContent from '@/auth/components/EmailSentContent';
import EmailSentDecoration from '@/auth/components/EmailSentDecoration';

type Step = {
  content: React.ReactNode;
  sideinfo: React.ReactNode;
};

const stepsComponent: Step[] = [
  {
    content: <EnterEmailContent />,
    sideinfo: <EnterEmailDecoration />,
  },
  {
    content: <EmailSentContent />,
    sideinfo: <EmailSentDecoration />,
  },
];

const ResetPasswordPage: NextPage = () => {
  // TODO: change local state for global context
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <SimpleLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
      mainContent={stepsComponent[currentStep].content}
      sideinfo={stepsComponent[currentStep].sideinfo}
    />
  );
};

export default ResetPasswordPage;
