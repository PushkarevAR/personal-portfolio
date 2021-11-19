import React from "react";
import styles from "./Education.module.scss";

function Education(props) {
  return (
    <article className={styles.education}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {props.icon}
          <h5>{props.title}</h5>
        </div>
        <div className={styles.arrow}>
          <i className={"fas fa-sort-down"}></i>
        </div>
      </div>
      <p className={styles.university}>{props.university}</p>
      <p className={styles.description}>{props.description}</p>
    </article>
  );
}

export default Education;
