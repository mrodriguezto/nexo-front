import type { NextPage } from 'next';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { GetServerSideProps } from 'next';
import { ArrowBack } from '@mui/icons-material';

import BasicLayout from '@/layouts/BasicLayout';
import { newProfilePage as strings } from '@/new-profile/strings';
import {
  BeginContent,
  BeginSideinfo,
  BasicInfoContent,
  BasicInfoSideinfo,
  DisciplinesContent,
  DisciplinesSideinfo,
  KeywordsContent,
  KeywordsSideinfo,
  TopicsSideinfo,
  TopicsContent,
  DescriptionContent,
  DescriptionSideinfo,
  UploadsContent,
  UploadsSideinfo,
} from '@/new-profile/components';
import { INewProfileStep as IStep } from '@/new-profile/types';
import { updateStep } from '@/new-profile/state';
import { useAppDispatch, useAppSelector } from 'store';
import FadeIn from 'common/components/Transition/FadeIn';

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
    const handleNextStep = () => {
      if (!canContinue) return;

      dispatch(updateStep('next'));
    };

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
          <Button onClick={handleNextStep} fullWidth disabled={!canContinue}>
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
        <FadeIn>
          <Box>{children}</Box>
        </FadeIn>
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
