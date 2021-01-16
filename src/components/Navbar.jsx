import {Component} from 'react';

class NavBar extends Component {
    
    render(){
        return <div>
            <button onClick={this.props.addrow}>add row</button>
            <button onClick={this.props.addcol}>add col</button>
            <button onClick={this.props.removeRow}>remove row</button>
            <button onClick={this.props.removeCol}>remove col</button>
            <button onClick={this.props.clearAll}>clear all</button>
            <select onChange={this.props.setColor}>
                <option value="#FF0000">Red</option>
                <option value="#00FF00">Green</option>
                <option value="#0000FF">Blue</option>
            </select>
            
        </div>
    }
}

export default NavBar;