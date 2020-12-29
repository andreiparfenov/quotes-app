import { ADD_QUOTE } from './actionTypes'

let nextQuoteId = 0
export const addQuote = content => ({
  type: ADD_QUOTE,
  payload: {
    id: ++nextQuoteId,
    content
  }
})
