import React from 'react';

import './App.css';

function TextBox(props: { label: any; change: any }) {
    const {
        label,
        change
    } = props;

    const changeVal = (e: any) => {
        change(e.target.value);
    }

    return (
        <div className="TextBox">
            <label>{props.label}: </label>
            <input type = "text" placeholder={label} onChange={changeVal} />
        </div>
    );
}

export default TextBox;