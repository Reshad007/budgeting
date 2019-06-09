import {
  ADD_NEW_ROW,
  UPDATE_CATEGORY,
  UPDATE_AMOUNT,
  UPDATE_DETAILS,
  UPDATE_PERCENTAGE
} from "./types";

export const addNewRow = payload => {
  return {
    type: ADD_NEW_ROW,
    payload
  };
};

export const updateCategory = payload => {
  return {
    type: UPDATE_CATEGORY,
    payload
  };
};

export const updateAmount = payload => {
  return {
    type: UPDATE_AMOUNT,
    payload
  };
};

export const updateDetails = payload => {
  return {
    type: UPDATE_DETAILS,
    payload
  };
};

export const updatePercentage = payload => {
  return {
    type: UPDATE_PERCENTAGE,
    payload
  };
};
