import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Songs from "./pages/Songs";

import "./App.css";
import "./styles/Pages.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="songs" element={<Songs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
