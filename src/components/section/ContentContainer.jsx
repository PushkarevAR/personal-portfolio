import React from "react";
import ButtonScroll from "../button/ButtonScroll";
import styles from "./ContentContainer.module.scss";

function ContentContainer(props) {
  const back = props.pic ? (
    <div className={styles.back}>
      <img src={props.pic} alt="kek" />
    </div>
  ) : (
    <div className={styles.back}></div>
  );

  return (
    <section className={styles.container} id={props.id}>
      <article className={styles.content}>
        {props.title}
        {props.text}
        <div className={styles.footer}>{props.footer}</div>
        <ButtonScroll
          position={props.onRight}
          upId={props.upId}
          downId={props.downId}
        />
      </article>
      {back}
    </section>
  );
}

export default ContentContainer;
