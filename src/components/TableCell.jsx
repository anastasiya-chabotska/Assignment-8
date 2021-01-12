import React from "react";



const TableCell = (props) => {
  console.log(props)
  const changeColor = () => {
  }
  return <td Click={changeColor} className= {"cube "} ></td>
};

export default TableCell;
