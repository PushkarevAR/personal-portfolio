import React from "react";
import "./Header.module.scss";

function Header() {
  return (
    <header>
      <nav>
        <li>
          <ul>
            <a href="/">Home</a>
          </ul>
          <ul>
            <a href="/">About</a>
          </ul>
          <ul>
            <a href="/">Skills</a>
          </ul>
          <ul>
            <a href="/">Education</a>
          </ul>
          <ul>
            <a href="/">GFX</a>
          </ul>
        </li>
      </nav>
    </header>
  );
}

export default Header;
