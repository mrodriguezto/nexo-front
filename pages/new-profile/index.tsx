import type { NextPage } from 'next';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { GetServerSideProps } from 'next';

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
import TopicsSideinfo from '@/new-profile/components/TopicsSideinfo';
import TopicsContent from '@/new-profile/components/TopicsContent';
import DescriptionContent from '@/new-profile/components/DescriptionContent';
import DescriptionSideinfo from '@/new-profile/components/DescriptionSideinfo';
import UploadsContent from '@/new-profile/components/UploadsContent';
import UploadsSideinfo from '@/new-profile/components/UploadsSideinfo';
import { INewProfileStep as IStep } from '@/new-profile/types';
import { useAppDispatch, useAppSelector } from 'store';
import { ArrowBack } from '@mui/icons-material';
import { updateStep } from '@/new-profile/state';

const content: { [key in IStep]: React.ReactNode } = {
  begin: <BeginContent />,
  basicInfo: <BasicInfoContent />,
  disciplines: <DisciplinesContent />,
  keywords: <KeywordsContent />,
  topics: <TopicsContent />,
  description: <DescriptionContent />,
  uploads: <UploadsContent />,
};

const sideinfo: { [key in IStep]: React.ReactNode } = {
  begin: <BeginSideinfo />,
  basicInfo: <BasicInfoSideinfo />,
  disciplines: <DisciplinesSideinfo />,
  keywords: <KeywordsSideinfo />,
  topics: <TopicsSideinfo />,
  description: <DescriptionSideinfo />,
  uploads: <UploadsSideinfo />,
};

const NewProfilePage: NextPage = () => {
  const currentStep = useAppSelector((state) => state.newProfile.step);
  const dispatch = useAppDispatch();

  const SideinfoWrapper = ({ children }: { children: React.ReactNode }) => {
    const canContinue = useAppSelector((state) => state.newProfile.canContinue);

    return (
      <Stack alignItems="center" justifyContent="center" height="100%">
        <Stack
          alignItems="center"
          justifyContent={currentStep === IStep.Begin ? 'center' : 'flex-start'}
          height="100%"
          width="100%"
          paddingTop={currentStep === IStep.Begin ? 0 : 16}
        >
          {children}
        </Stack>
        <Box flex={1} />
        {currentStep !== IStep.Begin && (
          <Button fullWidth disabled={!canContinue}>
            {currentStep === IStep.Uploads ? strings.finish_btn : strings.next_btn}
          </Button>
        )}
      </Stack>
    );
  };

  const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <Stack
        justifyContent={currentStep === IStep.Begin ? 'center' : 'flex-start'}
        paddingY={4}
        height="100%"
      >
        {currentStep !== IStep.Begin && (
          <Box>
            <IconButton
              aria-label="Volver"
              color="primary"
              sx={{ position: 'relative', right: 8 }}
              onClick={() => dispatch(updateStep('prev'))}
            >
              <ArrowBack />
            </IconButton>
          </Box>
        )}

        {children}
      </Stack>
    );
  };

  return (
    <BasicLayout
      pageTitle={strings.title}
      pageDescription={strings.description}
      mainContent={<MainContentWrapper>{content[currentStep]}</MainContentWrapper>}
      sideinfo={<SideinfoWrapper>{sideinfo[currentStep]}</SideinfoWrapper>}
    />
  );
};

// TODO: Verify access token from local storage or cookies before accesing the page
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { data } = await  // your fetch function here

  return {
    props: {},
  };
};

export default NewProfilePage;
