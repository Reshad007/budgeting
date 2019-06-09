import {
  ADD_NEW_ROW,
  UPDATE_AMOUNT,
  UPDATE_DETAILS,
  UPDATE_CATEGORY,
  UPDATE_PERCENTAGE
} from "../actions/types";

export const rowReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW_ROW:
      return [...state, payload];

    case UPDATE_CATEGORY:
      return state.filter(row => {
        if (row.id === payload.id) {
          row.category = payload.category;
        }
        return row;
      });

    case UPDATE_DETAILS:
      return state.filter(row => {
        if (row.id === payload.id) {
          row.details = payload.details;
        }
        return row;
      });

    case UPDATE_AMOUNT:
      return state.filter(row => {
        if (row.id === payload.id) {
          row.dollars = payload.amount;
        }
        return row;
      });
    case UPDATE_PERCENTAGE:
      return state.filter(row => {
        if (row.id === payload.id) {
          let amount = row.dollars;
          amount = parseInt(amount, 10);

          let percentage = Number(amount / payload.income).toLocaleString(
            undefined,
            {
              style: "percent",
              minimumFractionDigits: 2
            }
          );
          row.percentage = percentage;
        }
        return row;
      });
    default:
      return state;
  }
};
