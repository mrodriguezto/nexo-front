import React, { useState } from 'react';
import type { NextPage } from 'next';

import BasicLayout from '@/layouts/BasicLayout';
import { newProfilePage as strings } from '@/new-profile/strings';
import BeginContent from '@/new-profile/components/BeginContent';
import BeginSideinfo from '@/new-profile/components/BeginSideinfo';
import BasicInfoContent from '@/new-profile/components/BasicInfoContent';
import BasicInfoSideinfo from '@/new-profile/components/BasicInfoSideinfo';
import DisciplinesContent from '@/new-profile/components/DisciplinesContent';
import DisciplinesSideinfo from '@/new-profile/components/DisciplinesSideinfo';
import KeywordsContent from '@/new-profile/components/KeywordsContent';
import KeywordsSideinfo from '@/new-profile/components/KeywordsSideinfo';
import TopicsSideinfo from '../../modules/new-profile/components/TopicsSideinfo';
import TopicsContent from '@/new-profile/components/TopicsContent';
import DescriptionContent from '@/new-profile/components/DescriptionContent';
import DescriptionSideinfo from '@/new-profile/components/DescriptionSideinfo';

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
  disciplines: <DisciplinesContent />,
  keywords: <KeywordsContent />,
  topics: <TopicsContent />,
  description: <DescriptionContent />,
  uploads: undefined,
};

const sideinfo: { [key in Step]: React.ReactNode } = {
  begin: <BeginSideinfo />,
  basicInfo: <BasicInfoSideinfo />,
  disciplines: <DisciplinesSideinfo />,
  keywords: <KeywordsSideinfo />,
  topics: <TopicsSideinfo />,
  description: <DescriptionSideinfo />,
  uploads: undefined,
};

const NewProfilePage: NextPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>('description');

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
