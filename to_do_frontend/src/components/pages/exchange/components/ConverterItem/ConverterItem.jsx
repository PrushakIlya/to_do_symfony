import React from 'react';
import classes from "../Converter/Converter.module.css";
import MyInput from "../../../../UI/input/MyInput";
import MySelect from "../../../../UI/select/MySelect";
import {IoIosClose} from "react-icons/io";

const ConverterItem = (props) => {

    return (
        <label className={classes.converterItem}>
            {/*<span>USD</span>*/}
            <MySelect {...props}/>
            <MyInput {...props}/>
            <IoIosClose className={classes.close}/>
        </label>
    );
};

export default ConverterItem;