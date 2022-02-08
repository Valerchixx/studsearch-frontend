import React from "react";
import styles from './css/filtersBlock.module.css'

const FiltersBlock = (props:any) =>{
    return(
        <div className={styles.filterBlock}>{props.children}</div>
    )
}

export default FiltersBlock