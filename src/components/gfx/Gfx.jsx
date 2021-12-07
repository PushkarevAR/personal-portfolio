import React from "react";
import styles from "./Gfx.module.scss";

function Gfx(props) {
    return(
        <>
        <div className={styles.gfx}>
            <i className="fas fa-tools"></i>
            <p id={styles.description}>soon</p>
        </div>
        
        </>
    );
}

export default Gfx;