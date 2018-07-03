import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

ReactDOM.render(
    <HashRouter>
        <Routes />
    </HashRouter>
    , document.getElementById('root')
);
