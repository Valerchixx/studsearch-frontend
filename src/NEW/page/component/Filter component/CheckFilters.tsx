import React from "react";
import styles from './css/checkFilters.module.css';
import checkMark from './svg/checkMark.svg';

const CheckFilters = (props:any) =>{
    return(
        <div className={styles.wrapper}>
        <label className={styles.labelCheckbox}>
            <input type="checkbox"  className={styles.inputCheckBox} />
            <div className={styles.checkbox}>
                <img className={styles.mark} src={checkMark} alt="" />
            </div>
            <div>
           <div  className={styles.title}>Бакалавр (після 11 класів)</div>
            </div>

        </label>
        <label className={styles.labelCheckbox}>
            <input type="checkbox"disabled  className={styles.inputCheckBox} />
            <div className={styles.checkbox}>
                <img className={styles.mark} src={checkMark} alt="" />
            </div>
            <div>
           <div  className={styles.titleDis}>Магістр (в розробці)</div>
            </div>

        </label>
     </div>
    )
}

export default CheckFilters