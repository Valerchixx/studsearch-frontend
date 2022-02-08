import React from "react";
import styles  from './css/checkTowns.module.css'
import checkMark from './svg/checkMark.svg'

const CheckTowns = (props:any) =>{
    return(

        <div className={styles.wrap}>
           <label className={styles.customCheckbox}>
               <input type="checkbox"  className={styles.hiddenCheckbox} />
               <div className={styles.checkbox}>
                   <img className={styles.mark} src={checkMark} alt="" />
               </div>
               <div>
               {props.text}
               </div>
           </label>
           <p>10000 ВНЗ</p>
        </div>

    )
}
export default CheckTowns