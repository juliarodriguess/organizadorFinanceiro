import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getExpensesData } from '../../redux/actions'
import { Typography, Grid, List, ListItem, ListItemText, Divider, Paper } from '@material-ui/core';


const reducer = (accumulator, currentValue) => accumulator + currentValue;
class CostView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            expensesValue:[]
        }
    }
    async mapResult() {
        await this.state.data && this.state.data.map(expense => {
            this.state.expensesValue.push(expense.cost)
        }) 
        let total = this.state.expensesValue.reduce(reducer,0).toFixed(2);
        this.setState({total})
    }

    async setInternData(){
        const dataBase = await this.getData();
        const stateDataBase = await this.setState({data : dataBase})
        return stateDataBase
    }

    async getData(){
        const data = await fetch('https://intense-fjord-83556.herokuapp.com/api/expenses')
        .then(response => response.json())
        .then(data => data)
        return data
    }
    
    async componentWillMount(){
        await this.setInternData()
        await this.mapResult()
    }

    render() {
        return (
            <>
                <Typography variant="h6" align="center">Estes foram seus últimos gastos</Typography>
                <Grid container xs={12} justify='center' style={{marginTop:'100px'}}>
                <Paper style={{width:'50%'}}>
                {this.state.data && 
                    <List>
                        {this.state.data.map((expense, key) => {
                            return <ListItem>
                                <ListItemText
                                    key={key}
                                    primary={expense.expenseType}
                                    secondary={`R$ ${expense.cost}`}
                                />
                            </ListItem>
                        })}
                        <Divider />
                        <ListItem>
                            <ListItemText
                                primary={`R$ ${ this.state.total}`} 
                            />
                        </ListItem>
                    </List>
                }
                </Paper>
                </Grid>
            </>
        )
    }
};

const mapStateToProps = store => ({
    newValue: store.expenseState.newValue
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getExpensesData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CostView);