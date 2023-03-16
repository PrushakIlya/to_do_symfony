import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from './Converter.module.css';
import ConverterItem from "../ConverterItem/ConverterItem";
import {IoIosAddCircleOutline} from "react-icons/io";

const Converter = () => {

    const apiUrl = "https://cdn.cur.su/api/latest.json"

    const [rates, setRates] = useState(null)

    const majorCurrencies = [
        {
            name: "USD",
            id: Date.now(),
            currencyValue: 1,
        },
        // {
        //     name: "EUR",
        //     id: Date.now(),
        //     currencyValue: 1.1,
        // },
        {
            name: "BYN",
            id: Date.now(),
            currencyValue: 2.5,
        },
    ]

    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setRates(response.data.rates)
        })
    }, [])

    // console.log(rates)
    // console.log(Object.keys(rates))

    const [newValue, setNewValue] = useState("")

    const changeValue = (e) => {
        setNewValue(e)
    }

    {/*{rates*/
    }
    {/*    ? majorCurrencies.map((cur, index) => {*/
    }
    {/*        return <ConverterItem rates={Object.keys(rates)} changeValue={changeValue} currencyValue={cur.currencyValue} key={index}*/
    }
    {/*                              name={cur.name} newValue={newValue}/>*/
    }
    {/*    })*/
    }
    {/*    : <div>Выберите валюты</div>*/
    }
    {/*}*/
    }

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const [currency1, setCurrency1] = useState('BYN')
    const [currency2, setCurrency2] = useState('USD')

// 1 инпут и селект
    function changeWithInput(input1) {
        if (!input1.length) {
            setInput2('')
        } else {
            setInput2((input1 * rates[currency2] / rates[currency1]).toFixed(2))
        }
        setInput1(input1)
    }
    function changeWithSelect(currency1) {
        setInput2((input1 * rates[currency2] / rates[currency1]).toFixed(2))
        setCurrency1(currency1)
    }

// 2 инпут и селект
    function changeWithInput2(input2) {
        setInput1((input2 * rates[currency1] / rates[currency2]).toFixed(2))
        setInput2(input2)
    }
    function changeWithSelect2(currency2) {
        setInput1((input2 * rates[currency1] / rates[currency2]).toFixed(2))
        setCurrency2(currency2)
    }

    const [newCur, setNewCur] = useState("Add currency")

    return (
        <div className={classes.converterWrapper}>

            {rates
                ?
                <>
                    {/*{*/}
                    {/*    majorCurrencies.map((item) =>*/}
                    {/*        <ConverterItem*/}
                    {/*            currencies={Object.keys(rates)}*/}

                    {/*            amountInput={input1}*/}
                    {/*            currency={currency1}*/}
                    {/*            onChangeInput={changeWithInput}*/}
                    {/*            onCurrencyChange={changeWithSelect}*/}
                    {/*        />*/}
                    {/*    )*/}
                    <ConverterItem
                        currencies={Object.keys(rates)}

                        amountInput={input1}
                        currency={currency1}
                        onChangeInput={changeWithInput}
                        onCurrencyChange={changeWithSelect}
                    />

                    <ConverterItem
                        currencies={Object.keys(rates)}

                        amountInput={input2}
                        currency={currency2}
                        onChangeInput={changeWithInput2}
                        onCurrencyChange={changeWithSelect2}
                    />
                </>
                : null
            }

            <button className={classes.addCurrency}>
                <IoIosAddCircleOutline className={classes.addCurrencyIcon}/>
                <select
                    value={newCur}
                    className={classes.select1}
                    onChange={e => setNewCur(e.target.value)}
                >
                    <option disabled>{newCur}</option>
                    {rates
                        ? Object.keys(rates).map(cur =>
                            <option
                                key={cur}
                                className={classes.selectList1}
                            >
                                {cur}
                            </option>
                        )
                        : null
                    }
                </select>

            </button>
        </div>
    );
};

export default Converter;