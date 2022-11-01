import { configureStore } from '@reduxjs/toolkit';
import { newProfileReducer } from '@/new-profile/state/newProfileSlice';
import { newJobAdReducer } from '@/new-job-ad/state/newJobAdSlice';

export const store = configureStore({
  reducer: {
    newProfile: newProfileReducer,
    newJobAd: newJobAdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
