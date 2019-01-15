import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { getExpensesData } from '../../redux/actions'
import { Typography, Grid, List, ListItem, ListItemText, Divider } from '@material-ui/core';

// // Fiz essa parte só para gerar dados pra minha lista, mas os dados devem vir do back
// /////////////////////////////////////////////////////////////////// Apagar até ...
var myArray = ['Almoço', 'Transporte', 'Diversos', 'Supermercado'];
var rand = myArray[(Math.random() * myArray.length) | 0]
const expenses = [
    {
        date: '22/12/1995',
        type: myArray[(Math.random() * myArray.length) | 0],
        value: (Math.random() * 100).toFixed(2)
    },
    {
        date: '22/12/1995',
        type: myArray[(Math.random() * myArray.length) | 0],
        value: (Math.random() * 100).toFixed(2)
    },
    {
        date: '22/12/1995',
        type: myArray[(Math.random() * myArray.length) | 0],
        value: (Math.random() * 100).toFixed(2)
    },
    {
        date: '22/12/1995',
        type: myArray[(Math.random() * myArray.length) | 0],
        value: (Math.random() * 100).toFixed(2)
    },
]
// ////////////////////////////////////////////////////////////////... aqui

// Essa parte faz a soma dos valores gerados
let expensesValue = [] // Array com os valores de cada custo
expenses.map(expense => {
    return expensesValue.push(Number(expense.value))
}) // Função que monta a nova array, apenas de valores
const reducer = (accumulator, currentValue) => accumulator + currentValue; // Reduce, para fazer a soma dos valores
class CostView extends Component {
    constructor(props) {
        super(props)
        this.changePage = this.changePage.bind(this)
        this.state = {

        }
    }
    changePage() {
        this.setState({ atMy: true }) // Mudar para o estado e a fução real
    }
    render() {
        if (this.state.atMy) return <Redirect to="/my" /> // Mudar para endereço real
        return (
            <>
                <Typography variant="h6" align="center">Estes foram seus últimos gastos</Typography>
                <Grid container>
                    <List>
                        {expenses.map((expense, key) => {
                            return <ListItem>
                                <ListItemText
                                    key={key}
                                    primary={expense.type}
                                    secondary={`R$ ${expense.value}`}
                                />
                            </ListItem>
                        })}
                        <Divider />
                        <ListItem>
                            <ListItemText
                                primary={`R$ ${(expensesValue.reduce(reducer)).toFixed(2)}`} // usei toFixed para deixar os número com 2 casas decimais
                            />
                        </ListItem>
                    </List>
                </Grid>
            </>
        )
    }
};

export default connect(getExpensesData)(CostView);