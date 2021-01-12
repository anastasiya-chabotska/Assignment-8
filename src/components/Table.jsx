import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  let arr = [];
  for(let i = 0; i < props.row; i++){
    arr.push(<TableRow  key = {i}column = {props.column} color  = {props.color}/>);
  }
  return (
    <table>
      <tbody>
        {arr}
      </tbody>
    </table>
  );
};

export default Table;
