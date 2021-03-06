import { ADD_QUOTE, TOGGLE_QUOTE, SET_FILTER, FETCH_QUOTES } from './actionTypes'

let nextQuoteId = 0
export const addQuote = content => ({
  type: ADD_QUOTE,
  payload: {
    id: ++nextQuoteId,
    content
  }
});

export const toggleQuote = id => ({
  type: TOGGLE_QUOTE,
  payload: { id }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});

export const fetchQuotes = (quotes) => ({
  type: FETCH_QUOTES,
  quotes: quotes
});