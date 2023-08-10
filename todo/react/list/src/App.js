
import './App.css';
import { useState } from 'react';
import Search from './search';
import Result from './result';

function App() {
  const [list, setList] = useState([
    { value: "Go to the store", isDone: false },
    { value: "Fix car", isDone: false },
    { value: "Get haircut", isDone: false },
    { value: "Repair pc", isDone: false },
    { value: "Clean house", isDone: false },
    { value: "Pay bills", isDone: false },
    { value: "Prepare dinner", isDone: false }
  ]);

  const [filterList, setFilterList] = useState(list);

  function onSearch(evt) {
    const v = evt.target.value;
    setFilterList([...list.filter(d => d.value.toLowerCase().indexOf(v.toLowerCase()) > -1)]);
  }
  return (
    <div className="App">
      <Search onSearch={onSearch} />
      <Result list={filterList} />
    </div>
  );
}

export default App;
