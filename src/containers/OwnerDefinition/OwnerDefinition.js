import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../../redux/actions';
import { TextField, Typography, Button, Grid } from '@material-ui/core';


class OwnerDefinition extends Component {
    state={
        inputValue: '',
        redirect: false
    }

    inputChange = event => {
        this.setState({
          inputValue: event.target.value
        })
    }

    sendName = () => {
        return (
            this.props.clickButton(this.state.inputValue),
            this.setState({
                redirect: true
              }),
            console.log("sendName")
        )}
    
    render() {
        const { newValue } = this.props;

        if(this.state.redirect) {
            return <Redirect to="/incluir-gasto"/>
        }

        localStorage.setItem("nome", newValue)

        const { inputValue } = this.state;

        return(
            <div className="input-owner">
                <Typography variant="h6" align="center">Vamos começar!</Typography>
                <Grid container xs={12} justify="flex-end">
                <TextField
                    id="name"
                    label="Qual é o seu nome?"
                    value={inputValue}
                    onChange={this.inputChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                />
                <Button variant="contained" color="primary" onClick={this.sendName}>Ir</Button>
                </Grid>
            </div>
        )
    }
};

const mapStateToProps = store => ({
    newValue: store.ownerState.newValue
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OwnerDefinition);