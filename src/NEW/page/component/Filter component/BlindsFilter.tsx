import React, { useState } from "react";
import styles from'./css/blinds.module.css'
import arrowLeft from './svg/arrowLeft.svg';
import CheckTowns from "./CheckTown";
import CheckBlinds from "./CheckBlinds";
const BlindsFilter = (props:{title:string,id:number,emoji:string,special:{ code: number; name: string; emoji: string; field_id: number; }[]}) =>{
    const [flag,setFlag] = useState({flag:false})
    function open(){
        setFlag({
            ...flag,
            flag: !flag.flag
        })
    }
    return(
        <div className={styles.wrapper}>
        <div onClick={open} className={styles.wrapBlinds}>
            <div>
                <p className={styles.parag} >{` ${props.emoji} ${props.title}`}</p> <span className={styles.id}>{`(${props.id})`}</span>
            </div>
            <div>
                <img className={flag.flag ? styles.rotate : styles.arrow} src={arrowLeft} alt="" />
            </div>

        </div>
        { flag.flag && props.special.map((item) => <CheckBlinds id={item.code} emoji={item.emoji} text={item.name} />)}
        </div>
    )
}

export default BlindsFilter