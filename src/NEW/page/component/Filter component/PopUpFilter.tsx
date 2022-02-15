import React from "react";
import styles from './css/popUp.module.css'
import closePopUp from './svg/closePopUp.svg';

const PopUpFilter = (props:any) =>{
    return(
        <div onClick={props.close} className={props.openModal ? `${styles.modal} ${styles.active}` : styles.modal}>
            <div onClick={e => e.stopPropagation()} className={ props.openModal ? `${styles.modalContent} ${styles.active}` : styles.modalContent}>
                <div className={styles.headWrap}>
                    <div>
                    <h1 >Спочатку введи свої бали</h1>
                    </div>
                    <div onClick={props.close}>
                        <img className={styles.close} src={closePopUp} alt="" />
                    </div>
                </div>
                <div className={styles.descrWrap}>
                    <p className={styles.description}>Для цього сортування ми вираховуємо твій конкурсний бал для <span className="each">кожної</span> конкурсної пропозиції.</p>
                    <p className={styles.description}>Бал залежить від коефіцієнтів, які у кожної пропозиції свої і відрізняються.</p>
                    <p className={styles.description}> Вираховувши, порівнюємо з прохідними балами минулих років і показуємо тобі найбільш підходящі</p>
                   </div>
                   <div className={styles.btnWrapper}>
                       <button type="button" className={styles.btn}>Ввести бали ЗНО та атестату</button>
                   </div>
            </div>

        </div>
    )
}

export default PopUpFilter