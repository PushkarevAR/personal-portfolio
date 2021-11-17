import React from "react";
import { buttonLink } from "./ButtonLink.module.scss";

function ButtonLink(props) {
    return(
        <a className={buttonLink} href={props.to}>{props.content}</a>
    );
}

export default ButtonLink;