import { combineReducers } from "redux";
import cards from "./cardReducer";
import app from "./appReducer";

export default combineReducers({
  app,
  cards
});
