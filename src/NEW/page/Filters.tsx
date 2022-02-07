import React from "react";
import styles from './filters.module.css';
import FiltersBlock from "./component/Filter component/FiltersBLock";
import HeaderFilter from "./component/Filter component/Header";
import CheckFilters from "./component/Filter component/CheckFilters";
import arrowUp from './component/Filter component/arrowRight.svg';
import arrowRight from './component/Filter component/arrowUp.svg'
import BlindsFilter from "./component/Filter component/BlindsFilter";


const  Filters  = (props:any) =>{
    const blinds = ["🎓  Освіта/Педагогіка (01) ","🎭  Культура і мистецтво (02)","📘  Гуманітарні науки (03)","⛪  Богослов’я (04)","🤝  Соціальні та поведінкові науки (05)","📰  Журналістика (06)","🏢  Управління та адміністрування (07)","⚖️  Право (08)","🧬  Біологія (09)","🏞️  Природничі науки (10)","➗  Математика та статистика (11)","💻  Інформаційні технології (12)"]
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
               <HeaderFilter title='Освітній рівень' />
               <div className={styles.wrapCheck}>
               <CheckFilters  />
               </div>
           </FiltersBlock>
           <FiltersBlock>
             <HeaderFilter  title='Галузь та спеціальність'/>
            {blinds.map((item)=> <BlindsFilter  title={item}/>)}
            <h3 className={styles.viewMore}>Показати ще 17</h3>
           </FiltersBlock>
        </div>
    )
}

export default Filters