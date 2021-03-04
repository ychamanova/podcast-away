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
    loadLocalPodcasts: (state, action) => {
      const localPodcasts = localStorage.getItem('podcasts');
      console.log(typeof localPodcasts)
      if (localPodcasts === '' || localPodcasts === null) {
        localStorage.setItem('podcasts', '[]');
        state.local = [];
      } else {
        state.local = JSON.parse(localPodcasts);
      }
    },
    toggleActive: (state) => {
      state.active = !state.active;
    },
    addPodcast: (state, action) => {
      let item = { ...action.payload, id: uuidv4() };
      if (state.local.filter(e => e.audio === item.audio).length === 0) {
        state.local.unshift(item)
      } else {
        return;
      }
    },
    deletePodcast: (state, action) => {
      let itemId = action.payload;
      console.log('deleting', itemId)
    },
    updateLocalStorage: (state) => {
      localStorage.setItem('podcasts', JSON.stringify(state.local))
    },
    updateLocalPodcasts: (state, action) => {
      state.local = action.payload;
    }
  },
});

export const {
  toggleActive,
  loadLocalPodcasts,
  setRemotePodcasts,
  addPodcast,
  deletePodcast,
  updateLocalStorage,
  updateLocalPodcasts,
} = podcastSlice.actions;

export const fetchRemotePodcasts = () => (dispatch) => {
  fetch('/api/podcasts')
    .then((res) => res.json())
    .then((data) => dispatch(setRemotePodcasts(data)));
};

export const selectRemotePodcasts = (state) => state.podcast.remote;
export const selectLocalPodcasts = (state) => state.podcast.local;


export default podcastSlice.reducer;