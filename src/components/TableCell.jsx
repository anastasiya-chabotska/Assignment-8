import React from "react";



class TableCell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    let color = this.props.color;
    console.log(color);
    return <td onClick={this.toggleClass} className={this.state.active ? color: 'cube'}></td>
  }
}


export default TableCell;
