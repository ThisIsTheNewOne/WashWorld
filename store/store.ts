import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userSlice';
import profilePhotoSlice from './profilePhotoSlice';

export const store = configureStore({
    reducer: {
      users: usersReducer,
      profilePicture: profilePhotoSlice,
    },
  })


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch  