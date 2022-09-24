import React, { useState } from 'react';
import type { NextPage } from 'next';

import BasicLayout from '@/layouts/BasicLayout';
import { newProfilePage as strings } from '@/new-profile/strings';
import BeginContent from '@/new-profile/components/BeginContent';
import BeginSideinfo from '@/new-profile/components/BeginSideinfo';
import BasicInfoContent from '@/new-profile/components/BasicInfoContent';
import BasicInfoSideinfo from '@/new-profile/components/BasicInfoSideinfo';

type Step =
  | 'begin'
  | 'basicInfo'
  | 'disciplines'
  | 'keywords'
  | 'topics'
  | 'description'
  | 'uploads';

const content: { [key in Step]: React.ReactNode } = {
  begin: <BeginContent />,
  basicInfo: <BasicInfoContent />,
  disciplines: undefined,
  keywords: undefined,
  topics: undefined,
  description: undefined,
  uploads: undefined,
};

const sideinfo: { [key in Step]: React.ReactNode } = {
  begin: <BeginSideinfo />,
  basicInfo: <BasicInfoSideinfo />,
  disciplines: undefined,
  keywords: undefined,
  topics: undefined,
  description: undefined,
  uploads: undefined,
};

const NewProfilePage: NextPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>('basicInfo');

  return (
    <BasicLayout
      pageTitle={strings.title}
      pageDescription={strings.description}
      mainContent={content[currentStep]}
      sideinfo={sideinfo[currentStep]}
    />
  );
};

export default NewProfilePage;
