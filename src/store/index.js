import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducers } from 'reducers';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
