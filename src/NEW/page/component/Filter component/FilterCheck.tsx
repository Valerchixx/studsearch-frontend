import React from "react";
import checkMark from './svg/checkMark.svg';
import styles from './css/filterCheck.module.css'

const FilterCheck = (props:any) =>{
    return(
        <div className={styles.wrap}>
            <label className={styles.customCheckBox}>
               <input type="checkbox"  className={styles.hiddenCheckbox} />
               <div className={styles.checkbox}>
                   <img className={styles.mark} src={checkMark} alt="" />
               </div>
               <div>
              {props.text}
               </div>
           </label>
        </div>
    )
}
export default FilterCheck