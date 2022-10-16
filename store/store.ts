import { configureStore } from '@reduxjs/toolkit';
import { newProfileReducer } from '@/new-profile/state/newProfileSlice';

export const store = configureStore({
  reducer: {
    newProfile: newProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
