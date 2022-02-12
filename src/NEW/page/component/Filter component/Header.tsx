import React, { useState } from "react";
import styles from './css/header.module.css'
import arrowUp from './svg/arrowRight.svg';

const HeaderFilter = (props:any) =>{
    const[flag,setFlag] = useState(false)
    function open(){
        props.open?.()
        setFlag(!flag)
    }
    return(
        <div onClick={open} className={styles.wrapHeaders}>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <img className={flag ? styles.rotate : styles.imgArrow} src={arrowUp}  alt="" />
            </div>
        </div>
    )
}

export default HeaderFilter