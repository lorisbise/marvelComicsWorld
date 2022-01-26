import Comic from './Pages/singleComic'
import Serie from './Pages/singleSeries'
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Hero from "./Pages/singleHero";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hero/:id" element={<Hero />} />
        <Route path="/comic/:id" element={<Comic />} />
        <Route path="/serie/:id" element={<Serie />} />
      </Routes>
    </div>
  );
}

export default App;
