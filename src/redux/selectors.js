import { VISIBILITY_FILTERS } from '../constants';

export const getQuotesState = store => store.quotes;
export const getQuotes = store => getQuotesState(store) ? getQuotesState(store).allIds : [];
export const getQuoteById = (store, id) => getQuotesState(store) ? { ...getQuotesState(store).byIds[id], id } : {};
