import "./App.css";
import Welcome from "./pages/Welcome";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "../src/pages/Skills";
import BluePage from "../src/pages/BluePages";
import Contact from "./pages/Contact";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Welcome />
      <About />
      <Projects />
      <BluePage />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
