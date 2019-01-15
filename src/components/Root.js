import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import FormScreen from './FormScreen/FormScreen';
import CostView from './CostView/CostView'

const ScreensRoot = () => {
    return(
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/form" component={FormScreen}/>
                <Route path="/resultado" component={CostView}/>
            </Switch>
        </React.Fragment>
    )
};

export default ScreensRoot;