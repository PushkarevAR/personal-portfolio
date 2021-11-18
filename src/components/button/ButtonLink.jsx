import React from "react";
import { buttonLink } from "./ButtonLink.module.scss";

function ButtonLink(props) {
    return(
        <a className={buttonLink} href={props.to} >{props.content}</a> //target="_blank"
    );
}

export default ButtonLink;