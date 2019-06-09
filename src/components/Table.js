import React, { useState } from "react";
import TableRow from "./TableRow";
import { connect } from "react-redux";
import { addNewRow } from "../redux/actions/rowAction";
import { setTotalIncome } from "../redux/actions/totalIncomeAction";
import genId from "uniqid";

function Table({ rows, addNewRow, setTotalIncome }) {
  let [income, setIncome] = useState(0);

  function handleChange(e) {
    setIncome((income = e.target.value));
  }

  function handleBlur(e) {
    setTotalIncome({ income });
  }

  function handleClick() {
    let newRow = {
      id: genId(),
      category: "",
      percentage: 0,
      dollars: 0,
      details: ""
    };

    addNewRow(newRow);
  }

  return (
    <>
      Enter your total income:{" "}
      <input
        name="total-income"
        min="1"
        type="number"
        value={income}
        onChange={handleChange}
        onBlur={handleBlur}
        className="mr-2"
        onFocus={e => e.target.select()}
      />
      <button
        className="btn btn-primary float-right mb-2"
        onClick={handleClick}
      >
        Add New Category
      </button>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Category</th>
            <th>Percentage</th>
            <th>Dollars</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {rows
            ? rows.map((row, i) => {
                return (
                  <TableRow
                    key={row.id}
                    percentage={row.percentage}
                    id={row.id}
                  />
                );
              })
            : `<tr>
            <td>Please add an Item to start budgeting.</td> ${console.log("hi")}
          </tr>`}
        </tbody>
        <tfoot className="tfoot-dark">
          <tr>
            <td colSpan="4">Total % spent of total income:</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

const mapStateToProps = state => {
  return {
    rows: state.rows,
    income: state.totalIncome
  };
};

export default connect(
  mapStateToProps,
  { addNewRow, setTotalIncome }
)(Table);
