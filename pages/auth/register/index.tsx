import type { NextPage } from 'next';

import BasicLayout from 'common/layouts/BasicLayout';
import { registerPage } from 'modules/auth/strings';
import { useState } from 'react';
import RegisterContent from '@/auth/components/RegisterContent';
import RegisterDecoration from '@/auth/components/RegisterDecoration';
import ConfirmEmailContent from '@/auth/components/ConfirmEmailContent';
import ConfirmEmailDecoration from '@/auth/components/ConfirmEmailDecoration';

type Step = 'register' | 'confirmEmail';

const content: { [key in Step]: React.ReactNode } = {
  register: <RegisterContent />,
  confirmEmail: <ConfirmEmailContent />,
};

const sideinfo: { [key in Step]: React.ReactNode } = {
  register: <RegisterDecoration />,
  confirmEmail: <ConfirmEmailDecoration />,
};

const RegisterPage: NextPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>('register');

  return (
    <BasicLayout
      pageTitle={registerPage.title}
      pageDescription={registerPage.description}
      mainContent={content[currentStep]}
      sideinfo={sideinfo[currentStep]}
    />
  );
};

export default RegisterPage;
