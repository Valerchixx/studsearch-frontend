import React from "react";
import checkMark from './svg/checkMark.svg';
import styles from './css/checkForms.module.css'

const CheckForms = (props: any) => {
    return (
        <div className={styles.wrap}>
            <label className={styles.customCheckBox}>
                <input type="checkbox" id={props.id} checked={props.checked} onChange={props.onChange} className={styles.hiddenCheckbox} />
                <div className={styles.checkbox}>
                    <img className={styles.mark} src={checkMark} alt="" />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.text}>{props.text}</div>
                    <div className={styles.descr}><p>{props.descr}</p></div>
                </div>

            </label>
        </div>
    )
}

export default CheckForms