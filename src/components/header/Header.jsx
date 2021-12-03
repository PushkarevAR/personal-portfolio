import React, { useState } from "react";
import styles from "./Header.module.scss";
import ButtonScrollTo from "../button/ButtonScrollTo";

function Header() {
  const [isActive, setActive] = useState({
    home: true,
    about: false,
    skills: false,
    education: false,
    gfx: false,
  });

  const deactivate = () =>
    Object.keys(isActive).map((key) => (isActive[key] = false));

  const clickHandler = (e) => {
    const current = e.target.textContent.toLowerCase().replace(/\s/g, "");
    const deactivateState = deactivate();
    setActive({ ...deactivateState, [current]: true });
  };

  const [isOpen, setOpen] = useState(true);
  const closeBtnIcon = isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>;

  return (
    <header className={isOpen ? styles.openHeader : ""}>
      <nav>
        <li>
          <ul
            className={isActive.home ? "active" : ""}
            id="ul-home"
            onClick={clickHandler}
          >
            <ButtonScrollTo toId="home"> Home </ButtonScrollTo>
          </ul>
          <ul
            className={isActive.about ? "active" : ""}
            id="ul-about"
            onClick={clickHandler}
          >
            <ButtonScrollTo toId="about"> About </ButtonScrollTo>
          </ul>
          <ul
            className={isActive.skills ? "active" : ""}
            id="ul-skills"
            onClick={clickHandler}
          >
            <ButtonScrollTo toId="skills"> Skills </ButtonScrollTo>
          </ul>
          <ul
            className={isActive.education ? "active" : ""}
            id="ul-education"
            onClick={clickHandler}
          >
            <ButtonScrollTo toId="education"> Education </ButtonScrollTo>
          </ul>
          <ul
            className={isActive.gfx ? "active" : ""}
            id="ul-gfx"
            onClick={clickHandler}
          >
            <ButtonScrollTo toId="gfx"> GFX </ButtonScrollTo>
          </ul>
        </li>
      </nav>
      <button
        id={styles.closeBtn}
        className={isOpen ? styles.openBtn : ""}
        onClick={() => setOpen(!isOpen)}
      >
        {closeBtnIcon}
      </button>
    </header>
  );
}

export default Header;
