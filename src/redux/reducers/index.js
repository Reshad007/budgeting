import { combineReducers } from "redux";
import { rowReducer } from "./rowReducer";
import { totalIncomeReducer } from "./totalIncomeReducer";

export default combineReducers({
  totalIncome: totalIncomeReducer,
  rows: rowReducer
});
