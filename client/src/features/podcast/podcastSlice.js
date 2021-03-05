import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    local: [],
    remote: [],
    activeItem: {},
    playlist: [],
    playing: false,
  },
  reducers: {
    playLocal: (state, action) => {
      console.log(state.playlist)
    },
    playRemote: (state, action) => {
      console.log(state.playlist)
    },
    setActiveItem: (state, action) => {
      if (action.payload.id === state.activeItem.id) {
        let curState = state.playing;
        state.playing = !curState;
      } else {
        state.activeItem = action.payload;
        state.playing = true;
      }
    },
    playing: (state, action) => {
      console.log(action.payload)
    },
    setRemotePodcasts: (state, action) => {
      state.remote = action.payload.map(item => ({ ...item, id: uuidv4() }))
    },
    loadLocalPodcasts: (state, action) => {
      const localPodcasts = localStorage.getItem('podcasts');
      if (localPodcasts === '' || localPodcasts === null) {
        localStorage.setItem('podcasts', '[]');
        state.local = [];
      } else {
        state.local = JSON.parse(localPodcasts);
      }
    },
    addPodcast: (state, action) => {
      let item = { ...action.payload, id: uuidv4(), local: true };
      if (state.local.filter(e => e.audio === item.audio).length === 0) {
        state.local.unshift(item);
      } else {
        return;
      }
    },
    deletePodcast: (state, action) => {
      let itemId = action.payload;
      let newState = [...state.local].filter(i => i.id !== itemId);
      state.local = newState;
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
  loadLocalPodcasts,
  setRemotePodcasts,
  addPodcast,
  deletePodcast,
  setActiveItem,
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
export const selectActiveItem = (state) => state.podcast.activeItem;
export const selectPlaying = (state) => state.podcast.playing;


export default podcastSlice.reducer;