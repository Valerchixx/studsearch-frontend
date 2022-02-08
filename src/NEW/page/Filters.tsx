import React from "react";
import styles from './filters.module.css';
import FiltersBlock from "./component/Filter component/FiltersBLock";
import HeaderFilter from "./component/Filter component/Header";
import CheckFilters from "./component/Filter component/CheckFilters";
import arrowRight from './component/Filter component/svg/arrowUp.svg'
import BlindsFilter from "./component/Filter component/BlindsFilter";
import CheckTowns from "./component/Filter component/CheckTown";
import CheckForms from "./component/Filter component/CheckForms";
import FilterCheck from "./component/Filter component/FilterCheck";


const  Filters  = (props:any) =>{
    const blinds = ["🎓  Освіта/Педагогіка (01) ","🎭  Культура і мистецтво (02)","📘  Гуманітарні науки (03)","⛪  Богослов’я (04)","🤝  Соціальні та поведінкові науки (05)","📰  Журналістика (06)","🏢  Управління та адміністрування (07)","⚖️  Право (08)","🧬  Біологія (09)","🏞️  Природничі науки (10)","➗  Математика та статистика (11)","💻  Інформаційні технології (12)"];
    const towns = ["м. Київ","Вінницька область","Волинська область","Дніпропетровська область","Донецька область","Житомирська область","Закарпатьська область","Закарпатьська область"];
    const forms = [
        {form: "Очна форма", descr:"Треба ходити на пари і лекції"},
        {form:"Заочна форма",descr:"Треба ходити на лекції раз за семестр"},
        {form:"Дистанційна",descr:"Нікуди ходити не треба"}
    ]
    const types = [
        {type: "За балами вступників (від вищих)", descr:"Де вчаться студенти з в середньому кращими балами ЗНО"},
        {type:"За балами вступників (від нищих)",descr:"Де вчаться студенти з в середньому гіршими балами ЗНО"},
        {type:"За шансами вступити з твоїми балами",descr:"Вираховуємо твій бал для кожної конкурсної пропозиції та порівнюємо з прохідними балами минулих років"}
    ]
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

           <FiltersBlock>
               <HeaderFilter title='Регіон' />
               {towns.map((item) => <CheckTowns text={item}/>)}
           </FiltersBlock>
           <FiltersBlock>
               <HeaderFilter title='Форма навчання' />
               {forms.map((item) => <CheckForms text={item.form} descr={item.descr}/>)}
           </FiltersBlock>
           <FiltersBlock>
               <HeaderFilter title='Бюджет чи контракт' />
               <FilterCheck text='Тільки бюджет'/>
           </FiltersBlock>
           <FiltersBlock>
               <HeaderFilter title='Сортувати' />
               {types.map((item) => <CheckForms text={item.type}  descr={item.descr}/>)}
               <div className={styles.btnWrap}>
               <button className={styles.btn}>Ввести бали ЗНО та атестату</button>
               </div>
           </FiltersBlock>
           <div className={styles.whiteWrap}>
               <div className={styles.btnShowWrap}>
                   <button className={styles.btnShow}>Показати результати (100500)</button>
               </div>
           </div>
        </div>
    )
}

export default Filters