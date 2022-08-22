import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";

//Components
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

ReactDOM.render(
  <React.StrictMode>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<ErrorPage />}/>
    </Routes>
  </React.StrictMode>,
  document.getElementById("root")
);
