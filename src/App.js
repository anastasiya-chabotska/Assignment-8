import React, { Component } from "react";
import "./style.css";
import Table from "./components/Table";
import TableRow from "./components/TableRow";
import TableCell from "./components/TableCell";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfRows: 1,
      numOfColumns: 1,
      color: "red",
    };

    this.addRow = this.addRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.removeColumn = this.removeColumn.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.pickColor = this.pickColor.bind(this);
  }

  addRow() {
    this.setState({
      numOfRows: this.state.numOfRows + 1,
    });
  }

  removeRow() {
    if (this.state.numOfRows > 1)
      this.setState({
        numOfRows: this.state.numOfRows - 1,
      });
  }

  addColumn() {
    this.setState({
      numOfColumns: this.state.numOfColumns + 1,
    });
  }

  removeColumn() {
    if (this.state.numOfColumns > 1)
      this.setState({
        numOfColumns: this.state.numOfColumns - 1,
      });
  }

  changeColor(event) {
    event.target.style.backgroundColor = this.state.color;
  }

  pickColor(event) {
    // console.log(event.target.value);
    this.setState({
      color: event.target.value,
    });
  }

  render() {
    console.log(this.state.numOfRows);
    console.log();
    return (
      <div>
        <div className="nav-bar">
          <div className="add">
            <button onClick={this.addRow}>Add Row</button>
            <button onClick={this.addColumn}>Add Column</button>
          </div>
          <select onChange={this.pickColor}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <div className="remove">
            <button onClick={this.removeRow}>Remove Row</button>
            <button onClick={this.removeColumn}>Remove Column</button>
          </div>
        </div>

        <Table
          rows={this.state.numOfRows}
          columns={this.state.numOfColumns}
          changeColor={this.changeColor}
        ></Table>
      </div>
    );
  }
}

export default App;
