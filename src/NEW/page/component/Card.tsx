import React from "react";
import './card.css'
import bookMark from './bookMark.svg'

const OfferCard = (props:any) =>{


    return(
        <div className="wrapper">
            <div className="wrap">
            <div className="wrapSpecial">
                <div className="headers">
                <h3 className="count">121 &#183;</h3>
                <h3>🏛 КПІ &#183;</h3>
                <h3>🎓 ФІОТ</h3>
                </div>
                <div className="imgMark">
                <img className="imgSac" src={bookMark} alt="img" />
                </div>
                </div>
                <p className="special">{props.phrase}</p>
                <p className="title">{props.title}</p>
                <div className="wrapDesc">
                 <h5 className="mark">{props.mark}</h5>
                 <p className="desc">{props.desc}</p>
                </div>
                </div>
        </div>

    )
}

export default OfferCard;