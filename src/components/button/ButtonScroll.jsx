import React from "react";
import styles from "./ButtonScroll.module.scss";
import ButtonScrollTo from "./ButtonScrollTo";

function ButtonScroll(props) {
  return (
    <div className={styles.btn}>
      <ButtonScrollTo toId={props.upId}>
        <i
          className={`fas fa-angle-up ${styles.up} ${
            props.position ? styles.right : styles.left
          }`}
        ></i>
      </ButtonScrollTo>
      <ButtonScrollTo toId={props.downId}>
        <i
          className={`fas fa-angle-down ${styles.down} ${
            props.position ? styles.right : styles.left
          }`}
        ></i>
      </ButtonScrollTo>
    </div>
  );
}

export default ButtonScroll;
