import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Box, Button, Stack } from '@mui/material';

import { newProfilePage as strings } from '@/new-profile/strings';
import BasicLayout from '@/layouts/BasicLayout';
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
import UploadsContent from '@/new-profile/components/UploadsContent';
import UploadsSideinfo from '@/new-profile/components/UploadsSideinfo';

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
  uploads: <UploadsContent />,
};

const sideinfo: { [key in Step]: React.ReactNode } = {
  begin: <BeginSideinfo />,
  basicInfo: <BasicInfoSideinfo />,
  disciplines: <DisciplinesSideinfo />,
  keywords: <KeywordsSideinfo />,
  topics: <TopicsSideinfo />,
  description: <DescriptionSideinfo />,
  uploads: <UploadsSideinfo />,
};

const NewProfilePage: NextPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>('uploads');

  const SideinfoWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <Stack alignItems="center" justifyContent="center" height="100%">
        <Stack
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
        >
          {children}
        </Stack>
        <Box flex={1} />
        {currentStep !== 'begin' && (
          <Button fullWidth>
            {currentStep === 'uploads' ? strings.finish_btn : strings.next_btn}
          </Button>
        )}
      </Stack>
    );
  };

  return (
    <BasicLayout
      pageTitle={strings.title}
      pageDescription={strings.description}
      mainContent={content[currentStep]}
      sideinfo={<SideinfoWrapper>{sideinfo[currentStep]}</SideinfoWrapper>}
    />
  );
};

export default NewProfilePage;
