import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';

const ScreensRoot = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Navbar} />
            </Switch>
        </React.Fragment>
    )
};

export default ScreensRoot;