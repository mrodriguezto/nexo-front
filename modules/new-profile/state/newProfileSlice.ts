import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INewProfileStep } from '../types';
import { IBasicInfo, INewProfile } from 'common/types';

export type NewProfileState = {
  profile: INewProfile;
  step: INewProfileStep;
  canContinue: boolean;
};

const initialState: NewProfileState = {
  profile: {
    id: undefined,
    display_name: 'Nombre',
    title: 'Título actual',
    location: 'Ubicación',
    birthday: '',
    biography: '',
    disciplines: [],
    keywords: [],
    topics: [],
    avatar_profile: undefined,
  },
  step: INewProfileStep.BasicInfo,
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

      if (index < 0 || index >= steps.length - 1) return;

      state.step = steps[index];
      state.canContinue = false;
    },
    updateBasicInfo: (
      state: NewProfileState,
      action: PayloadAction<Partial<IBasicInfo>>,
    ) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    updateCanContinue: (state: NewProfileState, action: PayloadAction<boolean>) => {
      state.canContinue = action.payload;
    },
  },
});

export const { updateBasicInfo, updateStep, updateCanContinue } =
  newProfileSlice.actions;

export const newProfileReducer = newProfileSlice.reducer;
