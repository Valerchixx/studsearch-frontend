import React from "react";

interface checkbox {
    label: string;
    value: string;
    checked: (boolean | undefined);
    onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    tag?: JSX.Element;
}

function Checkbox(props: checkbox) {
    const {label, value, checked, onChange, tag} = props;
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onChange} name={label} id={label}/>
            <label htmlFor={label}>
                {value}{tag}
            </label>
        </div>
    )
}

export default Checkbox;