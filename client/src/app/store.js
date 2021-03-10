import { throttle } from 'lodash';
import { configureStore } from '@reduxjs/toolkit';
import podcastReducer from '../features/podcast/podcastSlice';

export const store = configureStore({
  reducer: {
    podcast: podcastReducer,
  },
});