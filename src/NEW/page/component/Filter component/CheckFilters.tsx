import React from "react";
import './checkFilters.css'

const CheckFilters = (props:any) =>{
    return(
        <div className="wrapr">
        <div className="wrapFirst">
            <input type="checkbox" name="level1" id="level1" className="check" />
            <label className="labelCheck" htmlFor="level1">Бакалавр (після 11 класів)</label>
            </div>
            <div className="wrapSecond">
            <input type="checkbox" disabled name="level2" id="level2" className="check" />
            <label className="labelCheckDisable"  htmlFor="level1">Магістр (в розробці)</label>
        </div>
        </div>
    )
}

export default CheckFilters