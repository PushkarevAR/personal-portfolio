import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import { section } from "./Section.module.scss";

function Section() {
  return (
    <div className={section}>
      <Home />
      <About />
    </div>
  );
}

export default Section;
