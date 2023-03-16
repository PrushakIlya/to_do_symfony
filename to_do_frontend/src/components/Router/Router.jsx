import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import Todo from "../pages/todo/Todo";
import CountersWrapper from "../pages/counter/CountersWrapper/CountersWrapper";
import ExchangeContainer from "../pages/exchange/ExchangeContainer/ExchangeContainer";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="*" element={<NavMenu/>}/>
            </Routes>
            <Routes>
                <Route path="/todo" element={<Todo/>}/>
            </Routes>>

            <Routes>
                <Route path="/counter" element={<CountersWrapper/>}/>
            </Routes>

            <Routes>
                <Route path="/exchange" element={<ExchangeContainer/>}/>
            </Routes>
        </div>
    );
};

export default Router;