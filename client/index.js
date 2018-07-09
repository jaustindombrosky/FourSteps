import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import { HashRouter, MemoryRouter, Router } from 'react-router-dom';
import Routes from './routes';
import history from './history'

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
    // <HashRouter history={history}>
    //     <Routes />
    // </HashRouter>
    , document.getElementById('root')
);


