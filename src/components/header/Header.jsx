import React from "react";
import "./Header.module.scss";
import ButtonScrollTo from "../button/ButtonScrollTo";

function Header() {
  return (
    <header>
      <nav>
        <li>
          <ul>
            <ButtonScrollTo toId="home"> Home </ButtonScrollTo>
            {/* <a href="#home">Home</a> */}
          </ul>
          <ul>
            <ButtonScrollTo toId="about"> About </ButtonScrollTo>
            {/* <a href="#about">About</a> */}
          </ul>
          <ul>
            <ButtonScrollTo toId="skills"> Skills </ButtonScrollTo>
            {/* <a href="#skills">Skills</a> */}
          </ul>
          <ul>
            <ButtonScrollTo toId="education"> Education </ButtonScrollTo>
            {/* <a href="#education">Education</a> */}
          </ul>
          <ul>
            <ButtonScrollTo toId="gfx"> GFX </ButtonScrollTo>
            {/* <a href="#gfx">GFX</a> */}
          </ul>
        </li>
      </nav>
    </header>
  );
}

export default Header;
