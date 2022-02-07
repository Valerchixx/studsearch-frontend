import React from "react";
import  styles from'./card.module.css'
import bookMark from './bookMark.svg'

const OfferCard = (props:{title:string,phrase:string,desc:string,mark:string}) =>{


    return(
        <div className={styles.wrapper}>
            <div className={styles.wrap}>
            <div className={styles.wrapSpecial}>
                <div className={styles.headers}>
                <h3 className={styles.count}>121 &#183;</h3>
                <h3>🏛 КПІ &#183;</h3>
                <h3>🎓 ФІОТ</h3>
                </div>
                <div className={styles.imgMark}>
                <img className={styles.imgSac} src={bookMark} alt="img" />
                </div>
                </div>
                <p className={styles.special}>{props.phrase}</p>
                <p className={styles.title}>{props.title}</p>
                <div className={styles.wrapDesc}>
                 <h5 className={styles.mark}>{props.mark}</h5>
                 <p className={styles.desc}>{props.desc}</p>
                </div>
                </div>
        </div>

    )
}

export default OfferCard;