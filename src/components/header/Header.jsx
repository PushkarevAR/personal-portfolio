import React from "react";
import "./Header.module.scss";

function Header() {
  return (
    <header>
      <nav>
        <li>
          <ul>
            <a href="#home">Home</a>
          </ul>
          <ul>
            <a href="#about">About</a>
          </ul>
          <ul>
            <a href="#skills">Skills</a>
          </ul>
          <ul>
            <a href="#education">Education</a>
          </ul>
          <ul>
            <a href="#gfx">GFX</a>
          </ul>
        </li>
      </nav>
    </header>
  );
}

export default Header;
