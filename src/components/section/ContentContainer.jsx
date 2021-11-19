import React from "react";
import styles from "./ContentContainer.module.scss";

function ContentContainer(props) {
  return (
    <section className={styles.container}>
      <article className={styles.content}>
        {props.title}
        {props.text}
        <div className={styles.footer}>{props.footer}</div>
      </article>
    </section>
  );
}

export default ContentContainer;
