import React, { useState } from "react";
import styles from "./Header.module.scss";
import ButtonScrollTo from "../button/ButtonScrollTo";

function Header() {
  const [isActive, setActive] = useState({
    'home': true,
    'about': false,
    'skills': false,
    'education': false,
    'gfx': false,
  });

  const deactivate = () => Object.keys(isActive).map(key => isActive[key] = false);

  const clickHandler = (e) => {
    const current = e.target.textContent.toLowerCase().replace(/\s/g, '');
    const deactivateState = deactivate();
    setActive({...deactivateState, [current]: true});
  };

  return (
    <header>
      <nav>
        <li>
          <ul className={isActive.home ? styles.active : ""} onClick={clickHandler}>
            <ButtonScrollTo toId="home"> Home </ButtonScrollTo>
          </ul>
          <ul className={isActive.about ? styles.active : ""} onClick={clickHandler}>
            <ButtonScrollTo toId="about"> About </ButtonScrollTo>
          </ul>
          <ul className={isActive.skills ? styles.active : ""} onClick={clickHandler}>
            <ButtonScrollTo toId="skills"> Skills </ButtonScrollTo>
          </ul>
          <ul className={isActive.education ? styles.active : ""} onClick={clickHandler}>
            <ButtonScrollTo toId="education"> Education </ButtonScrollTo>
          </ul>
          <ul className={isActive.gfx ? styles.active : ""} onClick={clickHandler}>
            <ButtonScrollTo toId="gfx"> GFX </ButtonScrollTo>
          </ul>
        </li>
      </nav>
    </header>
  );
}

export default Header;
