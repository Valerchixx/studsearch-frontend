import React from "react";
import styles from'./css/blinds.module.css'
import arrowLeft from './svg/arrowLeft.svg';

const BlindsFilter = (props:any) =>{
    return(
        <div className={styles.wrapBlinds}>
            <div>
                <p>{props.title}</p>
            </div>
            <div>
                <img src={arrowLeft} alt="" />
            </div>
        </div>
    )
}

export default BlindsFilter