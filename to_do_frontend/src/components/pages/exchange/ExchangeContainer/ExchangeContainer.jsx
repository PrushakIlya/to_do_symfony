import React from 'react';
import Converter from "../components/Converter/Converter";
import classes from './ExchangeContainer.module.css'
const ExchangeContainer = () => {
    return (
        <div className={classes.container}>
            <h2 style={{textAlign: "center", fontSize: '25px', marginBottom: '35px'}}>Currency Converter</h2>
            <Converter/>
        </div>
    );
};

export default ExchangeContainer;