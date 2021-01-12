import TableCell from "./TableCell";

const TableRow = (props) => {
  let columns = [];
  for(let i = 0; i < props.column; i++){
    columns.push(<TableCell color = {props.color} key = {i}/>);
  }
  return (
    <tr>
      {columns}
    </tr>
  );
};

export default TableRow;
