import React from "react";
import './blinds.css'
import arrowLeft from './arrowLeft.svg';

const BlindsFilter = (props:any) =>{
    return(
        <div className="wrapBlinds">
            <div>
                <p>{props.title}</p>
            </div>
            <div>
                <img src={arrowLeft} alt="" />
            </div>
        </div>
    )
}

export default BlindsFilter