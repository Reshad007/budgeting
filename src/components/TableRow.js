import React from "react";
import { connect } from "react-redux";
import TableData from "./TableData";

function TableRow({ row, id, percentage }) {
  return (
    <>
      <tr className="">
        <TableData percentage={percentage} id={id} />
      </tr>
    </>
  );
}

const mapStateToProps = state => {
  return {
    rows: state.row
  };
};

export default connect(
  mapStateToProps,
  null
)(TableRow);
