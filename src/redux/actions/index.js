import axios from 'axios'
import { OWNER_UPDATE_VALUE, EXPENSE_POST_VALUE, EXPENSE_GET_VALUE } from '../actions/actionTypes';

const baseURL = {
  baseURL: 'https://intense-fjord-83556.herokuapp.com/api'

}

export const clickButton = value => ({
    type: OWNER_UPDATE_VALUE,
    newValue: value
  });

export function sendExpensesData(data) {
    return (dispatch) => {
      const json = {
        name: data.name,
        date: data.date,
        expenseType: data.expenseType,
        cost: data.cost
      }
      axios.create(baseURL)
        .post('/expenses', json)
        .then(response => {
          dispatch({ type: EXPENSE_POST_VALUE, data })
          console.log("api rodando", json, response)
          return response.data
        })
    }
  }


export function getExpensesData() {
  return (dispatch) => {
    const url = `/expenses`
    axios.create(baseURL)
      .get(url)
      .then(response => {
        console.log(response)
        return response.data
        dispatch({ type: EXPENSE_GET_VALUE, response })
      })
  }
}