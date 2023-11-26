import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Header from "../src/components/Header/Header";
import Cursor from "./components/cursor/cursor";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
