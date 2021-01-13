import {Component} from 'react';

class NavBar extends Component {
    
    render(){
        return <div>
            <button onClick={this.props.addrow}>add row</button>
            <button onClick={this.props.addcol}>add col</button>
            <button onClick={this.props.removeRow}>remove row</button>
            <button onClick={this.props.removeCol}>remove col</button>
            
        </div>
    }
}

export default NavBar;