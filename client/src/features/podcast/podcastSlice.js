import { createSlice } from '@reduxjs/toolkit';

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    local: [],
    remote: [],
    active: false,
  },
  reducers: {
    setRemotePodcasts: (state, action) => {
      state.remote = action.payload;
    },
    setLocalPodcasts: (state, action) => {
      state.local = action.payload;
    },
    toggleActive: (state) => {
      state.active = !state.active;
    },
    savePodcast: (state, action) => {
      state.local.push(action.payload);
    }
  },
});

export const {
  toggleActive,
  setLocalPodcasts,
  setRemotePodcasts,
  savePodcast,
} = podcastSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

// This function is a basic call to the server API to get an array of pre-determined users
export const fetchRemotePodcasts = () => (dispatch) => {
  fetch('/api/podcasts')
    .then((res) => res.json())
    .then((data) => dispatch(setRemotePodcasts(data)));
};

export const fetchLocalPodcasts = () => (dispatch) => {
  const localPodcasts = localStorage.getItem('podcasts') === undefined
    ? JSON.parse(localStorage.getItem('podcasts')) : [{ name: 'hello' }];
  dispatch(setLocalPodcasts(localPodcasts));
};

export const selectRemotePodcasts = (state) => state.podcast.remote;

export const selectLocalPodcasts = (state) => state.podcast.local;


export default podcastSlice.reducer;
