import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deck from "./pages/Deck";
import { SkeletonTheme } from "react-loading-skeleton";
// import Header from "./components/Header";
// import Note from "./pages/Note";

// export const BASE_URL = `http://localhost:5000`;
export const BASE_URL = `https://note-deck-backend.onrender.com`;

function App() {
  return (
    <>
      <SkeletonTheme
        baseColor="#313131"
        highlightColor="#525252"
        width="50%"
        height="0.5rem"
      >
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/notes/:noteId"} element={<Deck />}></Route>
        </Routes>
      </SkeletonTheme>
    </>
  );
}

export default App;
