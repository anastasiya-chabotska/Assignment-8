import {Component} from 'react';
import TableRow from './TableRow';
import TableCell from './TableCell';
import NavBar from './Navbar';

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            rows: 0,
            cols: 0
        }
        this.addrow = this.addrow.bind(this);
        this.addcol = this.addcol.bind(this);
    }
    
    addrow(){
        this.setState({
            rows: this.state.rows + 1
        })
    }
    addcol(){
        this.setState({
            cols: this.state.cols + 1
        })
    }

    render(){ 
        let tableRows = [];
        for(let i = 0; i <= this.state.rows; i++){
            tableRows.push(<TableRow key={i.toString()+"r"} 
                colsNum={this.state.cols} />)
        }
        return<div>
            <NavBar addrow= {this.addrow}
                    addcol= {this.addcol}/>
            <table>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div> 
        
    }
}

export default Table;