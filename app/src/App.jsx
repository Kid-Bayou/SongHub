import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/components/Layout";

import Home from "./pages/Home";

import "./App.css";
import "./styles/Pages.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
