import React from "react";
import styles from "./ButtonScroll.module.scss";

function ButtonScroll (props) {
    return(
        <div className={styles.btn}>
            <i className={`fas fa-angle-up ${styles.up} ${styles.right}`}></i>
            <i className={`fas fa-angle-down ${styles.down} ${styles.right}`}></i>
        </div>
    );
}

export default ButtonScroll;