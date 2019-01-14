import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../../redux/actions';
import { TextField, Typography, Button } from '@material-ui/core';


class OwnerDefinition extends Component {
    state={
        inputValue: ''
    }

    inputChange = event => {
        this.setState({
          inputValue: event.target.value
        })
      }

    render() {
        const { 
            clickButton,
            newValue 
        } = this.props;

        const { inputValue } = this.state;

        return(
            <fieldset className="input-owner">
                <Typography variant="h6" align="center">Vamos começar!</Typography>
                <TextField
                    id="name"
                    label="Qual é o seu nome?"
                    value={inputValue}
                    onChange={this.inputChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                />
                <Button variant="contained" color="primary" onClick={() => clickButton(inputValue)}>Ir</Button>
                <Typography variant="h6" align="center">{newValue}</Typography>
            </fieldset>
        )
    }
};

const mapStateToProps = store => ({
    newValue: store.ownerState.newValue
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OwnerDefinition);