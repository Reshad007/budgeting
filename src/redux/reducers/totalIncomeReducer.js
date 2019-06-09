import { TOTAL_INCOME } from "../actions/types";

export const totalIncomeReducer = (state = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOTAL_INCOME:
      let income = payload.income;
      return parseInt(income, 10);
    default:
      return state;
  }
};
