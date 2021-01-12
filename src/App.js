import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <button>Add Row</button>
      <button>Add Column</button>
      <select>
        <option>Red</option>
        <option>Red</option>
        <option>Red</option>
      </select>

      <Table />
    </div>
  );
}

export default App;
