import {Component} from 'react';
import TableCell from './TableCell';

class TableRow extends Component{

    render(){
        let tableCols = [];
        for(let i = 0; i <= this.props.colsNum; i++){
            tableCols.push(<TableCell key = {i.toString()+"c"}
                            changeColor={this.props.changeColor}
                            />);
        }
        return <tr>{tableCols}</tr>;
    }
}

export default TableRow;