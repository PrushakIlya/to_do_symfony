import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./components/layout/Layout";
import {BrowserRouter} from "react-router-dom";
import Router from './components/Router/Router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Router/>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);

