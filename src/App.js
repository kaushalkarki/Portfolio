import React from "react-dom";
import "./style.css";
import Main from "./Main";
import Skill from "./Skill";
import Contact from "./Contact";
import About from "./About";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
function App() {
  return (
   <>
   <Router>
    <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/skills" element={<Skill/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </Router>
   </>
  );
}

export default App;
