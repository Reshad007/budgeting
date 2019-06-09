import React, { useState } from "react";
import { connect } from "react-redux";
import {
  updateCategory,
  updateAmount,
  updateDetails,
  updatePercentage
} from "../redux/actions/rowAction";
import store from "../redux/store";

function TableData({
  rows,
  id,
  percentage,
  updateCategory,
  updateAmount,
  updateDetails,
  updatePercentage
}) {
  let [category, setCategory] = useState("");
  let [amount, setAmount] = useState(0);
  let [details, setDetails] = useState("");

  let handleChange = e => {
    if (e.target.name === "category") setCategory((category = e.target.value));
    if (e.target.name === "amount") setAmount((amount = e.target.value));
    if (e.target.name === "details") setDetails((details = e.target.value));
  };

  let handleBlur = e => {
    if (e.target.name === "category") {
      updateCategory({ category, id });
    }
    if (e.target.name === "amount") {
      updateAmount({ amount, id });
      let income = store.getState().totalIncome;
      if (amount !== 0) {
        updatePercentage({ amount, id, income });
      }
    }
    if (e.target.name === "details") {
      updateDetails({ details, id });
    }
  };

  return (
    <>
      <td>
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </td>
      <td>
        {/* {percentage
          ? parseFloat(percentage.substring(0, percentage.length - 1))
          : ""} */}

        <div>{percentage}</div>
      </td>
      <td>
        <input
          type="number"
          name="amount"
          min="1"
          value={amount}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={e => e.target.select()}
        />
      </td>
      <td>
        <input
          type="text"
          name="details"
          value={details}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </td>
    </>
  );
}

const mapStateToProps = state => {
  return {
    rows: state.rows
  };
};

export default connect(
  mapStateToProps,
  { updateCategory, updateAmount, updateDetails, updatePercentage }
)(TableData);
