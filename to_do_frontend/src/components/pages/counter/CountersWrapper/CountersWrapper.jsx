import React, {useState} from 'react';
import classes from "./CountersWrapper.module.css";
import Counter from "../Counter/Counter";

const CountersWrapper = () => {

    const countArray = [
        {
            id: Date.now()
        },
    ]

    const [amountCount, setAmountCount] = useState(countArray ? countArray : [])

    console.log(amountCount)

    function addCounter() {
        setAmountCount([{
            id: Date.now(),
        },
            ...amountCount,
        ])
    }

    return (<div className={classes.container}>
            <button onClick={() => addCounter()} className={classes.addCounter}>Add counter</button>
            <div className={classes.countersWrapper}>
                {
                    countArray ? amountCount.map((value, index) => {
                        return <Counter key={index}/>
                    }) : null
                }
            </div>
        </div>
    );
};

export default CountersWrapper;