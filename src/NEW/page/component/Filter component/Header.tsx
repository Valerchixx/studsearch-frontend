import React from "react";
import './header.css'
import arrowUp from './arrowRight.svg';

const HeaderFilter = (props:any) =>{
    return(
        <div className="wrapHeaders">
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <img src={arrowUp} alt="" />
            </div>
        </div>
    )
}

export default HeaderFilter