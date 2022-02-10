import React, { useState } from "react";
import styles from'./css/blinds.module.css'
import arrowLeft from './svg/arrowLeft.svg';
import CheckTowns from "./CheckTown";
import CheckBlinds from "./CheckBlinds";
const BlindsFilter = (props:any) =>{
    const [flag,setFlag] = useState({flag:false})
    const spec = ["(11) 🎓  Освітні, педагогічні науки","(12) 👦  Дошкільна освіта","(14) ‍🏫  Середня освіта","(15) ‍🏫  Професійна освіта","(16) ‍🎓  Спеціальна освіта","(17) 👟 Фізична культура і спорт"];

    function open(){
        setFlag({
            ...flag,
            flag: !flag.flag
        })
    }
    return(
        <div className={styles.wrapper}>
        <div className={styles.wrapBlinds}>
            <div>
                <p >{props.title}</p>
            </div>
            <div>
                <img onClick={open} className={flag.flag ? styles.rotate : styles.arrow} src={arrowLeft} alt="" />
            </div>

        </div>
        { flag.flag && spec.map((item)=> <CheckBlinds text={item}/>)}
        </div>
    )
}

export default BlindsFilter