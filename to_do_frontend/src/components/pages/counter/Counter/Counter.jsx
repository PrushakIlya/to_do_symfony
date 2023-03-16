import React, {useState} from 'react';
import classes from "./Counter.module.css";

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Counter:</h2>
            <h1>{count}</h1>
            <button className={classes.plus} onClick={() => setCount(count + 1)}>+</button>
            <button className={classes.minus} onClick={() => setCount(count - 1)}>-</button>
            <button className={classes.reset} onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Counter;