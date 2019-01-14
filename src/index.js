import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import ScreensRoot from './components/Root';
import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <ScreensRoot />
    </BrowserRouter>
        , document.getElementById('root'));

serviceWorker.unregister();
