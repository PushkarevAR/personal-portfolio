import React from "react";
import styles from "./Skill.module.scss";

function Skill(props) {
    return(
        <div className={styles.skill}>
            {props.icon}
            {props.title}
        </div>
    );
}

export default Skill;
