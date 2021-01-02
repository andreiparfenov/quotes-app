import {fetchQuotes} from './actions';

function fetchQuotesAction() {
    return dispatch => {
      fetch('https://quotes.rest/quote/random?language=en&limit=10')
      .then(res => res.json())
      .then(res => {
        if(res.error) {
          throw(res.error);
        }
        dispatch(fetchQuotes(res.quotes));
        return res.quotes;
      })
      .catch(error => {
        return error
      })
    }
}

export default fetchQuotesAction;
