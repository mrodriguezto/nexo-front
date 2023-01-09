import type { NextPage } from 'next';

import SimpleLayout from '@/layouts/SimpleLayout';
import { registerPage } from '@/auth/strings';
import RegisterContent from '@/auth/components/RegisterContent';
import RegisterDecoration from '@/auth/components/RegisterDecoration';
import ConfirmEmailContent from '@/auth/components/ConfirmEmailContent';
import ConfirmEmailDecoration from '@/auth/components/ConfirmEmailDecoration';
import RegisterCompletedContent from '@/auth/components/RegisterCompletedContent';
import RegisterCompletedSideInfo from '@/auth/components/RegisterCompletedSideInfo';
import { useAppSelector } from 'store';

type Step = {
  content: React.ReactNode;
  sideinfo: React.ReactNode;
};

const stepsComponent: Step[] = [
  {
    content: <RegisterContent />,
    sideinfo: <RegisterDecoration />,
  },
  {
    content: <ConfirmEmailContent />,
    sideinfo: <ConfirmEmailDecoration />,
  },
  {
    content: <RegisterCompletedContent />,
    sideinfo: <RegisterCompletedSideInfo />,
  },
];

const RegisterPage: NextPage = () => {
  const currentStep = useAppSelector((state) => state.register.step);

  return (
    <SimpleLayout
      pageTitle={registerPage.title}
      pageDescription={registerPage.description}
      mainContent={stepsComponent[currentStep].content}
      sideinfo={stepsComponent[currentStep].sideinfo}
    />
  );
};

export default RegisterPage;
