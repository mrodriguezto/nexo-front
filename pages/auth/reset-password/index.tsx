import { useState } from 'react';
import type { NextPage } from 'next';

import BasicLayout from 'common/layouts/BasicLayout';
import { resetPasswordPage as pageStrings } from 'modules/auth/strings';
import EnterEmailContent from 'modules/auth/components/EnterEmailContent';
import EnterEmailDecoration from 'modules/auth/components/EnterEmailDecoration';
import EmailSentContent from 'modules/auth/components/EmailSentContent';
import EmailSentDecoration from 'modules/auth/components/EmailSentDecoration';

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
  const [currentStep, setCurrentStep] = useState<Step>('enterEmail');

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
