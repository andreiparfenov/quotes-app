import { VISIBILITY_FILTERS } from '../constants';

export const getQuotesState = store => store.quotes;
export const getQuotes = store => getQuotesState(store) ? getQuotesState(store).allIds : [];
export const getQuoteById = (store, id) => getQuotesState(store) ? { ...getQuotesState(store).byIds[id], id } : {};
export const getNewQuotes = store => getQuotes(store).map(id => getQuoteById(store, id));

export const getQuotesByVisibilityFilter = (store, visibilityFilter) => {
  const allQuotes = getNewQuotes(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.LIKED:
      return allQuotes.filter(quote => quote.liked);
    case VISIBILITY_FILTERS.UNLIKED:
      return allQuotes.filter(quote => !quote.liked);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allQuotes;
  }
};
