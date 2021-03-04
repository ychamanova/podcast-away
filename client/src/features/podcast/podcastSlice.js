import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    local: [],
    remote: [],
    active: false,
  },
  reducers: {
    setRemotePodcasts: (state, action) => {
      state.remote = action.payload.map(item => ({ ...item, id: uuidv4() }))
    },
    setLocalPodcasts: (state, action) => {
      const localPodcasts = localStorage.getItem('podcasts') !== undefined
        ? JSON.parse(localStorage.getItem('podcasts')) : [];
      state.local = localPodcasts;
    },
    toggleActive: (state) => {
      state.active = !state.active;
    },
    savePodcast: (state, action) => {
      state.local.push(action.payload);
    },
    updateLocalStorage: (state) => {
      localStorage.set('podcasts', JSON.stringify(state.local))
    }
  },
});

export const {
  toggleActive,
  setLocalPodcasts,
  setRemotePodcasts,
  savePodcast,
} = podcastSlice.actions;

export const fetchRemotePodcasts = () => (dispatch) => {
  fetch('/api/podcasts')
    .then((res) => res.json())
    .then((data) => dispatch(setRemotePodcasts(data)));
};

export const selectRemotePodcasts = (state) => state.podcast.remote;
export const selectLocalPodcasts = (state) => state.podcast.local;


export default podcastSlice.reducer;