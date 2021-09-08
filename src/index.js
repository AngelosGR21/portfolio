import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
