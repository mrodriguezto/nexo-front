import { useState } from 'react';
import type { NextPage } from 'next';

import BasicLayout from 'common/layouts/BasicLayout';
import { resetPasswordPage as pageStrings } from '@/auth/strings';
import EnterEmailContent from '@/auth/components/EnterEmailContent';
import EnterEmailDecoration from '@/auth/components/EnterEmailDecoration';
import EmailSentContent from '@/auth/components/EmailSentContent';
import EmailSentDecoration from '@/auth/components/EmailSentDecoration';

type Step = 'enterEmail' | 'emailSent';

const content: { [key in Step]: React.ReactNode } = {
  enterEmail: <EnterEmailContent />,
  emailSent: <EmailSentContent />,
};

const decoration: { [key in Step]: React.ReactNode } = {
  enterEmail: <EnterEmailDecoration />,
  emailSent: <EmailSentDecoration />,
};

const ResetPasswordPage: NextPage = () => {
  // TODO: change local state for global context
  const [currentStep, setCurrentStep] = useState<Step>('emailSent');

  return (
    <BasicLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
      mainContent={content[currentStep]}
      sideinfo={decoration[currentStep]}
    />
  );
};

export default ResetPasswordPage;
