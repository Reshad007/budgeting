import React from "react";
import TableRow from "./TableRow";

export default function Table() {
  return (
    <>
      <button className="btn btn-primary float-right">Add New Item</button>
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
          <TableRow />
        </tbody>
      </table>
    </>
  );
}
