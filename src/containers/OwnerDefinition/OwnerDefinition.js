import React, { Component } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';


class OwnerDefinition extends Component {
    render() {
        return(
            <div className="input-owner">
                <Typography variant="h6" align="center">Vamos começar!</Typography>
                <TextField
                    id="outlined-name"
                    label="Qual é o seu nome?"
                    // className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    fullWidth="true"
                />
                <Button variant="contained" color="primary">Ir</Button>
            </div>
        )
    }
};

export default OwnerDefinition