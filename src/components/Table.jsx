import {Component} from 'react';
import TableRow from './TableRow';
import NavBar from './Navbar';

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            rows: 0,
            cols: 0,
            color: '#FFFFFF'
        }
        this.addrow = this.addrow.bind(this);
        this.addcol = this.addcol.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.removeCol = this.removeCol.bind(this);
        this.setColor = this.setColor.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.clearAll = this.clearAll.bind(this);
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
        if(this.state.cols > 0){
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
    changeColor(event){
        console.log(event);
        event.target.style.backgroundColor = this.state.color;
    }

    clearAll(){
        document.querySelectorAll("td").forEach( e => {  
            e.style.backgroundColor = "#FFFFFF";
        })
    }

    render(){ 
        let tableRows = [];
        for(let i = 0; i <= this.state.rows; i++){
            tableRows.push(<TableRow key={i.toString()+"r"} 
                colsNum={this.state.cols}
                changeColor={this.changeColor}
                />)
        }
        return<div>
            <NavBar addrow= {this.addrow}
                    addcol= {this.addcol}
                    removeRow= {this.removeRow}
                    removeCol= {this.removeCol}
                    setColor = {this.setColor}
                    clearAll = {this.clearAll}
                 />
                 <br></br>
            <table>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div> 
        
    }
}

export default Table;