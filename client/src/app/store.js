import { throttle } from 'lodash';
import { configureStore } from '@reduxjs/toolkit';
import podcastReducer from '../features/podcast/podcastSlice';
import { saveLocal } from '../features/podcast/saveLocal';

export const store = configureStore({
  reducer: {
    podcast: podcastReducer,
  },
});

store.subscribe(throttle(() => {
  saveLocal({
    local: store.getState().local
  });
}));


