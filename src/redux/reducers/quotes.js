import { ADD_QUOTE, TOGGLE_QUOTE, FETCH_QUOTES } from '../actionTypes';

const initialState = {
  quotes: [],
  allIds: [],
  byIds: {}
};

export default function types(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        quotes: action.payload
      }
    case ADD_QUOTE: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            liked: false
          }
        }
      };
    }
    case TOGGLE_QUOTE: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            liked: !state.byIds[id].liked
          }
        }
      };
    }
    default:
      return state;
  }
}

export const fetchQuotes = state => state.quotes;
