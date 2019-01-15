import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import FormScreen from './FormScreen/FormScreen';

const ScreensRoot = () => {
    return(
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/" component={FormScreen}/>
            </Switch>
        </React.Fragment>
    )
};

export default ScreensRoot;