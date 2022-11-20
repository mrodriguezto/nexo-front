import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INewJobAdDesc, INewJobAdExtraInfo, INewJobAd } from '../types';

export type NewJobAdState = {
  ad: INewJobAd;
  step: number;
  isValid: boolean;
  isPreviewOpened: boolean;
  isDetailsDialogOpened: boolean;
};

const initialState: NewJobAdState = {
  ad: {
    persona: '',
    title: '',
    description: '',
    location: null,
    expiration_date: '',
    tags: [],
    media: [],
  },
  step: 0,
  isValid: false,
  isPreviewOpened: false,
  isDetailsDialogOpened: false,
};

export const newJobAdSlice = createSlice({
  name: 'newJobAd',
  initialState,
  reducers: {
    updateStep: (state: NewJobAdState, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    updateIsValid: (state: NewJobAdState, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
    updatePersona: (state: NewJobAdState, action: PayloadAction<string>) => {
      state.ad.persona = action.payload;
    },
    updateDesc: (state: NewJobAdState, action: PayloadAction<Partial<INewJobAdDesc>>) => {
      state.ad = { ...state.ad, ...action.payload };
    },
    updateExtraInfo: (
      state: NewJobAdState,
      action: PayloadAction<Partial<INewJobAdExtraInfo>>,
    ) => {
      state.ad = { ...state.ad, ...action.payload };
    },
    setDefaultDate: (state: NewJobAdState, action: PayloadAction<string>) => {
      state.ad.expiration_date = action.payload;
    },
    togglePrevDialog: (state: NewJobAdState, action: PayloadAction<boolean>) => {
      state.isPreviewOpened = action.payload;
    },
    toggleDetailsDialog: (state: NewJobAdState, action: PayloadAction<boolean>) => {
      state.isDetailsDialogOpened = action.payload;
    },
    updateMediaFiles: (state: NewJobAdState, action: PayloadAction<string[]>) => {
      state.ad.media = [...action.payload];
    },
  },
});

export const {
  updateStep,
  updateIsValid,
  updatePersona,
  updateDesc,
  updateExtraInfo,
  togglePrevDialog,
  toggleDetailsDialog,
  updateMediaFiles,
  setDefaultDate,
} = newJobAdSlice.actions;

export const newJobAdReducer = newJobAdSlice.reducer;
