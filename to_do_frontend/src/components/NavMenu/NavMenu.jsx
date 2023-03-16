import React from 'react';
import classes from "./NavMenu.module.css";
import {useNavigate} from "react-router-dom";

const NavMenu = () => {

    const navigate = useNavigate();
    
    
    
    return (
        <div className={classes.navMenu}>
            <button onClick={() => navigate(`/todo`)} className={`text-white hover:text-pink-400 transition-colors ease-in-out duration-300`}>ToDo</button>
            <button onClick={() => navigate(`/counter`)} className={`text-white hover:text-pink-400 transition-colors ease-in-out duration-300`}>Counter</button>
            <button onClick={() => navigate(`/exchange`)} className={`text-white hover:text-pink-400 transition-colors ease-in-out duration-300`}>Exchange</button>
        </div>
    );
};

export default NavMenu;