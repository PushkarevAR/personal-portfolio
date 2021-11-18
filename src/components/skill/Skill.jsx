import React from "react";
import { skill } from "./Skill.module.scss";

function Skill(props) {
    return(
        <article className={skill}>
            <div className="icon">{props.icon}</div>
            <p>{props.title}</p>
        </article>
    );
}

export default Skill;
