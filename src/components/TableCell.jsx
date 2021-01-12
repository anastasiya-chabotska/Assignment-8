import React, { Component } from "react";

const TableCell = (props) => {
  return <td onClick={props.changeColor}></td>;
};

export default TableCell;
