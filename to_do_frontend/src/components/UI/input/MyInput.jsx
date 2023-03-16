import React from 'react';
import classes from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input
            className={classes.MyInput}
            value={props.amountInput}
            type="text"
            onChange={(e) => props.onChangeInput(e.target.value.match(/^\d+$/))}
            // onKeyup={(e) => e.target.value.match(/^\d+$/)}
            placeholder={0}
        />
    );
};

export default MyInput;