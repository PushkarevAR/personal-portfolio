import React, {useState} from "react";
import styles from "./Education.module.scss";

function Education(props) {
  const [isActive, setActive] = useState(false);

  let clickEducation = () => {
    setActive(!isActive);
  };

  let styleEducation = `${styles.education} ${isActive ? styles.active : styles.hidden}`;


  return (
    <article className={styleEducation}>
      <div className={styles.header} onClick={clickEducation}>
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
