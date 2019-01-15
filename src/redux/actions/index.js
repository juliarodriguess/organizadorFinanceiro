import axios from 'axios'
import { OWNER_UPDATE_VALUE, EXPENSE_POST_VALUE, EXPENSE_GET_VALUE } from '../actions/actionTypes';

const baseURL = {
  baseURL: 'http://localhost:4000/api'

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
          data.id = response.data._id
          dispatch({ type: EXPENSE_POST_VALUE, data })
          console.log("api rodando", json, response)
        })
    }
  }

export function getExpensesData(data) {
  return (dispatch) => {
    const url = `/expenses/${data.name}`
    axios.create(url)
      .post('/expenses/:name')
      .then(response => {
        const expenses = response.data.map(item => ({
          expenseType: item.expenseType,
          cost: item.cost
        }))
        dispatch({ type: EXPENSE_GET_VALUE, expenses })
      })
  }
}