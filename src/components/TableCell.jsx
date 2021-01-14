import { Component } from "react"


class TableCell extends Component{
    render(){
        return <td className="cell" onClick={this.props.changeColor}></td>;
    }
}

export default TableCell;