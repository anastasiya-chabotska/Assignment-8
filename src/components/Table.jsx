import React, { Component } from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  let result = [];
  let columns = props.columns;
  for (let i = 0; i < props.rows; i++) {
    result.push(
      <TableRow
        key={i}
        columns={columns}
        changeColor={props.changeColor}
      ></TableRow>
    );
  }
  return (
    <table>
      <tbody>{result}</tbody>
    </table>
  );
};

export default Table;
