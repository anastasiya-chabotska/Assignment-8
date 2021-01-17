import {Component} from 'react';

class NavBar extends Component {
    
    render(){
        return <div>
            <div className="buttons">
                <button onClick={this.props.addrow} className="btn-success btn-lg">add row</button>
                <button onClick={this.props.addcol} className="btn-success btn-lg">add col</button>
                <button onClick={this.props.removeRow} className="btn-success btn-lg">remove row</button>
                <button onClick={this.props.removeCol} className="btn-success btn-lg">remove col</button>
                <button onClick={this.props.clearAll} className="btn-success btn-lg">clear all</button>
                <button onClick={this.props.fillAll} className="btn-success btn-lg">fill all</button>
                <button onClick={this.props.fillUncolored} className="btn-success btn-lg">fillUncolored</button>
            </div>
            <div className="select-container"> 
                <select onChange={this.props.setColor}>
                    <option value="#FF0000">Red</option>
                    <option value="#00FF00">Green</option>
                    <option value="#0000FF">Blue</option>
                </select>
            </div>
            
            
        </div>
    }
}

export default NavBar;