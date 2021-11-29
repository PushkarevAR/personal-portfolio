import React from "react";
import ButtonScroll from "../button/ButtonScroll";
import styles from "./ContentContainer.module.scss";

function ContentContainer(props) {
  return (
    <section className={styles.container} id={props.id}>
      <article className={styles.content}>
        {props.title}
        {props.text}
        <div className={styles.footer}>{props.footer}</div>
        <ButtonScroll />
      </article>
      <div className={styles.back}>
        <img src={props.pic ? props.pic : ""} alt="kek" />
      </div>
    </section>
  );
}

export default ContentContainer;
