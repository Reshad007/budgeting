import { TOTAL_INCOME } from "./types";

export const setTotalIncome = payload => {
  return {
    type: TOTAL_INCOME,
    payload: payload
  };
};
