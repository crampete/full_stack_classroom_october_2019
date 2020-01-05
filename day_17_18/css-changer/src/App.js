import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LiveCSS from "./components/LiveCSS";
import Multiplier from "./components/Multiplier";
import About from "./components/About";

function App() {
  return (
    <div>
      <Multiplier abc={LiveCSS} />
      <Multiplier abc={About} />
      <About />
    </div>
  );
}

export default App;
