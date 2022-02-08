import React from "react";
import styles from './css/header.module.css'
import arrowUp from './svg/arrowRight.svg';

const HeaderFilter = (props:any) =>{
    return(
        <div className={styles.wrapHeaders}>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <img src={arrowUp} alt="" />
            </div>
        </div>
    )
}

export default HeaderFilter