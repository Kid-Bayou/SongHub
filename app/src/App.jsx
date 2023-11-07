import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import SongsLayout from "./pages/SongsLayout";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";

import "./App.css";
import "./styles/Pages.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="songs" element={<SongsLayout />}>
              <Route index element={<Songs />} />
              <Route path="playlists" element={<Playlists />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
