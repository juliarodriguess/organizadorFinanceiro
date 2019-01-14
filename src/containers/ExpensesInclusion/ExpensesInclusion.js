import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { TextField, Typography, Button, FormControl, InputLabel, Select, OutlinedInput, MenuItem } from '@material-ui/core';

class ExpensesInclusion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labelWidth: 0
        }
    }

    componentDidMount() {
        this.setState({
          labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
      }

    render() {
        return (
            <fieldset className="expenses-inclusion">
                <Typography variant="h6" align="center">Inclua aqui a despesa</Typography>
                <TextField
                    id="date"
                    label="De que dia que é?"
                    type="date"
                    // defaultValue={new Date()}
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth="true"
                    margin="normal"
                    variant="outlined"
                    defaultValue="data"
                />
                <FormControl fullWidth="true" variant="outlined" margin="normal">
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-age-simple"
                    >
                        Qual o tipo de gasto?
                    </InputLabel>
                    <Select
                        autoWidth="true"
                        // value={this.state.age}
                        // onChange={this.handleChange}
                        input={
                            <OutlinedInput
                                labelWidth={this.state.labelWidth}
                                name="age"
                                id="outlined-age-simple"
                            />
                        }
                    >
                        <MenuItem value={"Supermercado"}>Supermercado</MenuItem>
                        <MenuItem value={"Almoço"}>Almoço</MenuItem>
                        <MenuItem value={"Transporte"}>Transporte</MenuItem>
                        <MenuItem value={"Diversos"}>Diversos</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Quanto custou?"
                    type="number"
                    fullWidth="true"
                    margin="normal"
                    variant="outlined"
                    placeholder="R$XX,XX"
                    defaultValue="0,00"
                />
                <Button variant="contained" color="primary">Incluir esse gasto</Button>
            </fieldset>
        )
    }
};

export default ExpensesInclusion;