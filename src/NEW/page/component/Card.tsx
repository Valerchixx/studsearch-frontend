import React from "react";
import './card.css'
import bookMark from './bookMark.svg'

function Card(props:any){


    return(
        <div className="wrapper">
            <div className="wrapSpecial">
                <h3 className="count">121 &#183;</h3>
                <h3>🏛 КПІ &#183;</h3>
                <h3>🎓 ФІОТ</h3>
                <img className="imgSac" src={bookMark} alt="img" />
                </div>
                <p className="special">{props.phrase}</p>
                <p className="title">{props.title}</p>
                <div className="wrapDesc">
                 <h5 className="mark">{props.mark}</h5>
                 <p className="desc">{props.desc}</p>
                </div>
        </div>

    )
}

export default Card;