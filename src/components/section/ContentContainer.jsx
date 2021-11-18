import React from "react";
import { style } from "./ContentContainer.module.scss";

function ContentContainer(props) {
  return (
    <section className={style}>
      <article className={"container"}>
        {props.title}
        {props.text}
        <div className="footer">
          {props.footer}
        </div>
      </article>
    </section>
  );
}

export default ContentContainer;
