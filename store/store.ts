import { configureStore } from '@reduxjs/toolkit';
import { newProfileReducer } from '@/new-profile/state';
import { newJobAdReducer } from '@/new-job-ad/state';
import { registerReducer } from '@/auth/state';

export const store = configureStore({
  reducer: {
    newProfile: newProfileReducer,
    newJobAd: newJobAdReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
