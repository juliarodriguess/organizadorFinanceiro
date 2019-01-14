import React from 'react'
import Paper from '@material-ui/core/Paper';
import OwnerDefinition from '../../containers/OwnerDefinition/OwnerDefinition';
import './FormScreen.scss'

function FormScreen() {
    return(
        <Paper className="background-form">
            <form className="form-controller">
                <OwnerDefinition />
            </form>
        </Paper>
    )
}

export default FormScreen