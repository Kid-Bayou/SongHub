
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import songReducer from "./pages/redux/SongSlice"; 

import Layout from "./pages/components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SongsLayout from "./pages/SongsLayout";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";
import AddSong from "./pages/AddSong";
import DeleteSong from "./pages/DeleteSong";
import UpdateSong from "./pages/UpdateSong";

import "./App.css";

const store = configureStore({
  reducer: {
    song: songReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="songs" element={<SongsLayout />}>
              <Route index element={<Songs />} />
              <Route path="playlists" element={<Playlists />} />
            </Route>
            <Route path="addsong" element={<AddSong />} />
            <Route path="deletesong/:id" element={<DeleteSong />} />
            <Route path="updatesong/:id" element={<UpdateSong />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
