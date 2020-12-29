import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import quotes from "./quotes";

export default combineReducers({ quotes, visibilityFilter });
