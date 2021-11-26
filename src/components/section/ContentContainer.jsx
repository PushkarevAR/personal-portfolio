import React from "react";
import styles from "./ContentContainer.module.scss";

function ContentContainer(props) {
  return (
    <section className={styles.container} id={props.id}>
      <article className={styles.content}>
        {props.title}
        {props.text}
        <div className={styles.footer}>{props.footer}</div>
      </article>
      {/* <i className={`fas fa-user-astronaut ${styles.back}`}></i> */}
    </section>
  );
}

export default ContentContainer;
