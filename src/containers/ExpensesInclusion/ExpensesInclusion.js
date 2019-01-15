import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { sendExpensesData } from '../../redux/actions/index'
import { connect } from 'react-redux'
import { TextField, Typography, Button, FormControl, InputLabel, Select, OutlinedInput, MenuItem, Grid, InputAdornment } from '@material-ui/core';

class ExpensesInclusion extends Component {
    constructor(props) {
        super(props)
        this.onChangeSelect = this.onChangeSelect.bind(this)
        this.state = {
            labelWidth: 0,
            selectValue: ''
        }
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    onChangeSelect(e) {
        this.setState({ selectValue: e.target.value })
    }

    sendData = () => {
        const data = {
            name: name,
            date: document.querySelector("#date").value,
            expenseType: this.state.selectValue,
            cost: document.querySelector("#cost").value
         }
        this.props.sendExpensesData(data)
    }

    render() {
        console.log(this.props)
        return (
            <fieldset className="expenses-inclusion">
                <Typography variant="h6" align="center">Oi, {name}! Inclua aqui a despesa</Typography>
                <Grid container xs={12} justify="flex-end">
                    <TextField
                        id="date"
                        label="De que dia que é?"
                        defaultValue={new Date().toLocaleDateString("pt-BR")}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        margin="normal"
                        variant="outlined"
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
                            value={this.state.selectValue}
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    onChange={this.onChangeSelect}
                                />
                            }
                        >
                            <MenuItem value={"Supermercado"}>Supermercado</MenuItem>
                            <MenuItem value={"Almoço"}>Almoço</MenuItem>
                            <MenuItem value={"Transporte"}>Transporte</MenuItem>
                            <MenuItem value={"Diversos"}>Diversos</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container alignItems="center" justify="space-between">
                    <TextField
                        id="cost"
                        label="Quanto custou?"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        placeholder="XX,XX"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                    >
                    </TextField>
                    <Button variant="contained" color="primary" onClick={this.sendData}>Incluir esse gasto</Button>
                    </Grid>
                </Grid>
            </fieldset>
        )
    }
};

const name = localStorage.getItem("nome")

export default connect (null, {sendExpensesData})(ExpensesInclusion);