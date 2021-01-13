import {Component} from 'react';
import TableRow from './TableRow';
import TableCell from './TableCell';
import NavBar from './Navbar';

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            rows: 0,
            cols: 0,
            color: ""
        }
        this.addrow = this.addrow.bind(this);
        this.addcol = this.addcol.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.removeCol = this.removeCol.bind(this);
        this.setColor = this.setColor.bind(this);
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
    removeRow(){
        if(this.state.rows > 0){
            this.setState({
                rows: this.state.rows -1
            })
        }else{
            this.setState({
                cols: 0
            });
        }
    }
    removeCol(){
        if(this.state.cols >= 0){
            this.setState({
                cols: this.state.cols - 1
            })
        }else{
            this.setState({
                rows: 0
            });
        }
    }
    setColor(event){
        this.setState({
            color: event.target.value
        })
    }

    render(){ 
        let tableRows = [];
        for(let i = 0; i <= this.state.rows; i++){
            tableRows.push(<TableRow key={i.toString()+"r"} 
                colsNum={this.state.cols}/>)
        }
        return<div>
            <NavBar addrow= {this.addrow}
                    addcol= {this.addcol}
                    removeRow= {this.removeRow}
                    removeCol= {this.removeCol}
                    setColor = {this.setColor}
                 />
            <table>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div> 
        
    }
}

export default Table;