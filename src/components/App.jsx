import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Board from "../pages/Board/Board";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/board`} element={<Board />} />
        <Route path={`/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
