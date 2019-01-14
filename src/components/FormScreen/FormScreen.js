import React from 'react'
import Paper from '@material-ui/core/Paper';
import OwnerDefinition from '../../containers/OwnerDefinition/OwnerDefinition';
import ExpensesInclusion from '../../containers/ExpensesInclusion/ExpensesInclusion';
import './FormScreen.scss';

function FormScreen() {
    return(
        <Paper className="background-form">
            <form className="form-controller">
                <OwnerDefinition />
                {/* <ExpensesInclusion /> */}
            </form>
        </Paper>
    )
};

export default FormScreen;