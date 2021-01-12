import "./App.css";
import Table from "./components/Table";
import React from 'react';
// Count how many column

class App extends React.Component {

  state = { currentColumn: 1, currentRow: 1, color: 'cube' ,isClicked:'false'};
  addColumn = () => {
    this.setState({ currentColumn: this.state.currentColumn += 1 })
  }
  addRow = () => {
    this.setState({ currentRow: this.state.currentRow += 1 })
  }
  setColor = (e) => {
    this.setState({ color: e.target.value })
  }
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.addRow}>Add Row</button>
        <button type="button" onClick={this.addColumn}>Add Column</button>
        <select onChange={this.setColor}>
          <option value ="cube">Cube</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>

        <Table column={this.state.currentColumn} row={this.state.currentRow} color = {this.state.color} />
      </div>
    );
  }
}

export default App;
