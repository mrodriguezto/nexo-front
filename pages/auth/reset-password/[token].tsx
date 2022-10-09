import type { NextPage } from 'next';
import { useState } from 'react';

import BasicLayout from 'common/layouts/BasicLayout';
import { newPasswordPage as pageStrings } from '@/auth/strings';
import NewPasswordContent from '@/auth/components/NewPasswordContent';
import NewPasswordDecoration from '@/auth/components/NewPasswordDecoration';
import ResetCompletedContent from '@/auth/components/ResetCompletedContent';
import ResetCompletedDecoration from '@/auth/components/ResetCompletedDecoration';

type Step = 'newPassword' | 'resetCompleted';

const content = {
  newPassword: <NewPasswordContent />,
  resetCompleted: <ResetCompletedContent />,
};

const sideinfo = {
  newPassword: <NewPasswordDecoration />,
  resetCompleted: <ResetCompletedDecoration />,
};

const NewPasswordPage: NextPage = () => {
  // TODO: change local state for global context
  const [currentStep, setCurrentStep] = useState<Step>('newPassword');

  return (
    <BasicLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
      mainContent={content[currentStep]}
      sideinfo={sideinfo[currentStep]}
    />
  );
};

export default NewPasswordPage;
