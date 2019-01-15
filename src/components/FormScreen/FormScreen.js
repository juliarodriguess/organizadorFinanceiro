import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Paper, Grid } from '@material-ui/core';
import OwnerDefinition from '../../containers/OwnerDefinition/OwnerDefinition';
import ExpensesInclusion from '../../containers/ExpensesInclusion/ExpensesInclusion'
import './FormScreen.scss';


class FormScreen extends Component {
    render() {
        return(
            <Grid container justify="center">
                <Paper className="background-form">
                    <div className="form-controller">
                        <Route path="/identificacao" component={OwnerDefinition}/>
                        <Route path="/incluir-gasto" component={ExpensesInclusion}/>
                    </div>
                </Paper>
            </Grid>
        )
    }
};

export default FormScreen;