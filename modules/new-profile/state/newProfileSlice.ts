import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBasicInfo, IMedia, INewProfile } from 'common/types';
import { INewProfileStep } from '../types';

export type NewProfileState = {
  profile: INewProfile;
  step: INewProfileStep;
  canContinue: boolean;
};

const initialState: NewProfileState = {
  profile: {
    id: undefined,
    display_name: '',
    title: '',
    location: null,
    birthday: '',
    image: '',
    biography: '',
    disciplines: [],
    keywords: [],
    topics: [],
    avatar_profile: undefined,
    media: [],
  },
  step: INewProfileStep.Keywords,
  canContinue: false,
};

export const newProfileSlice = createSlice({
  name: 'newProfile',
  initialState,
  reducers: {
    updateStep: (state: NewProfileState, action: PayloadAction<'next' | 'prev'>) => {
      const steps = Object.values(INewProfileStep);
      let index = steps.findIndex((step) => step === state.step);

      if (index === -1) return;

      if (
        !state.canContinue &&
        state.step !== INewProfileStep.Begin &&
        action.payload !== 'prev'
      )
        return;

      action.payload === 'next' ? index++ : index--;

      if (index < 0 || index > steps.length - 1) return;

      state.step = steps[index];
    },

    updateCanContinue: (state: NewProfileState, action: PayloadAction<boolean>) => {
      state.canContinue = action.payload;
    },
    updateBasicInfo: (
      state: NewProfileState,
      action: PayloadAction<Partial<IBasicInfo>>,
    ) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    updateDisciplines: (state: NewProfileState, action: PayloadAction<string[]>) => {
      state.profile.disciplines = action.payload;
    },
    updateKeywords: (state: NewProfileState, action: PayloadAction<string[]>) => {
      state.profile.keywords = action.payload;
    },
    updateTopics: (state: NewProfileState, action: PayloadAction<string[]>) => {
      state.profile.topics = action.payload;
    },
    updateBio: (state: NewProfileState, action: PayloadAction<string>) => {
      state.profile.biography = action.payload;
    },
    updateMedia: (state: NewProfileState, action: PayloadAction<IMedia[]>) => {
      state.profile.media = action.payload;
    },
    updateProfileImg: (state: NewProfileState, action: PayloadAction<string>) => {
      state.profile.image = action.payload;
    },
  },
});

export const {
  updateBasicInfo,
  updateStep,
  updateCanContinue,
  updateDisciplines,
  updateKeywords,
  updateTopics,
  updateBio,
  updateMedia,
  updateProfileImg,
} = newProfileSlice.actions;

export const newProfileReducer = newProfileSlice.reducer;
