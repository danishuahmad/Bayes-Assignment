import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import "react-datepicker/dist/react-datepicker.css";

const renderOrHydrate = app.innerHTML.trim().length ? 'hydrate' : 'render';

ReactDOM[renderOrHydrate](
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('app')
);
