import React from "react-dom";
import "./style.css";
import Main from "./components/Main";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import About from "./components/About";
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
function App() {
  return (
   <>
   
     <Navbar/>
    <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/skills" element={<Skill/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
   </>
  );
}

export default App;
