import React from 'react';
import classes from "./Select.module.css";

const MySelect = (props) => {
    return (
        <select
            value={props.currency}
            onChange={e => props.onCurrencyChange(e.target.value)}
            className={classes.selectSecond}
            // className={classes.select}
        >
            {
                props.currencies.map(currency =>
                    <option
                        key={currency}
                        value={currency}
                        className={classes.selectList}
                    >
                        {currency}
                    </option>
                )
            }

        </select>
    );
};

export default MySelect;