import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    list: [],
  },
  reducers: {
    setSongs: (state, action) => {
      state.list = action.payload;
    },
    addSongSuccess: (state, action) => {
      state.list.push(action.payload)
    },
    deleteSongSuccess: (state, action) => {
      state.list = state.list.filter(song => song.id !== action.payload);
    },
    updateSongSuccess: (state, action) => {
      const { id, updatedSong } = action.payload;
      const index = state.list.findIndex(song => song.id === id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...updatedSong };
      }
    },
  },
});

export const { setSongs, addSongSuccess, deleteSongSuccess, updateSongSuccess } = songsSlice.actions;
export const FETCH_SONGS = 'songs/fetchSongs';
export const ADD_SONG = 'songs/addSong';
export const DELETE_SONG = 'songs/deleteSong';
export const UPDATE_SONG = 'songs/updateSong';
export default songsSlice.reducer;
