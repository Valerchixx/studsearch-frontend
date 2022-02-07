import React from "react";
import styles from './filters.module.css';
import FiltersBlock from "./component/Filter component/FiltersBLock";
import HeaderFilter from "./component/Filter component/Header";
import CheckFilters from "./component/Filter component/CheckFilters";
import arrowUp from './component/Filter component/arrowRight.svg';
import arrowRight from './component/Filter component/arrowUp.svg'


const  Filters  = (props:any) =>{
    return(
        <div className={styles.wrapS}>
            <div className={styles.wrapHeader}>
            <div className={styles.wrap1}>
            <img src={arrowRight} alt="" />
            <h3 className={styles.header}>Фільтри</h3>
            </div>
            <div className={styles.wrap2}>
            <p className={styles.clear}>Очистити все</p>
            </div>
            </div>
           <FiltersBlock >
               <div className={styles.wrapH}>
                <div>
               <HeaderFilter title='Освітній рівень'/>
               </div>
               <div>
               <img src={arrowUp} alt="" />
               </div>
               </div>
               <div className={styles.wrapCheck}>
               <CheckFilters  />
               </div>
           </FiltersBlock>
        </div>
    )
}

export default Filters