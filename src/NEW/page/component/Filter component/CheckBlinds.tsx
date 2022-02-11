import React from "react";
import styles from './css/checkBlinds.module.css'
import checkMark from './svg/checkMark.svg'
const CheckBlinds = (props:any) =>{
    return(
        <div className={styles.wrap}>
        <label className={styles.customCheckbox}>
            <input type="checkbox"  className={styles.hiddenCheckbox} />
            <div className={styles.checkbox}>
                <img className={styles.mark} src={checkMark} alt="" />
            </div>
            <div>
          <span className={styles.id}>{`(${props.id})`}</span>  {`${props.emoji} ${props.text}`}
            </div>
        </label>
     </div>
    )
}
export default CheckBlinds