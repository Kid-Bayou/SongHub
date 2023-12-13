
import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: {
    title: "",
    artist: "",
  },
  reducers: {
    setNewTitle: (state, action) => {
      state.title = action.payload;
    },
    setNewArtist: (state, action) => {
      state.artist = action.payload;
    },
  },
});

export const { setNewTitle, setNewArtist } = songSlice.actions;
export default songSlice.reducer;
