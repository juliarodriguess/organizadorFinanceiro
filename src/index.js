import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Store } from './redux/store'
import * as serviceWorker from './services/serviceWorker';
import ScreensRoot from './components/Root';
import './index.css';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <ScreensRoot />
        </BrowserRouter>
    </Provider>
        , document.getElementById('root'));

serviceWorker.unregister();
