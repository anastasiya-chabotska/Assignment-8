import React, { Component } from "react";
import TableCell from "./TableCell";

const TableRow = (props) => {
  let result = [];
  for (let i = 0; i < props.columns; i++) {
    result.push(<TableCell key={i} changeColor={props.changeColor} />);
  }

  return <tr>{result}</tr>;
};

export default TableRow;
