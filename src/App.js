import logo from './logo.svg';
import './App.css';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Counter from './Counter';
import Form from './Form';
import { useState } from 'react';

function App() {
  const data = {
    labels: ['Schlafen', 'Arbeit', 'Freizeit', 'Essen'],
    datasets: [
      {
        label: 'part',
        data: [8, 10, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(25, 66, 77, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const [newItem,setNewItem]=useState("")
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };
  return (
    <div className="App"> 
    <div style={{width:'400px',height:'400px'}}>
    <Pie data={data} />
    </div>
    <h1>React Counter</h1>
      <Counter />
      <Form newItem={newItem} setNewItem={setNewItem} addItem={addItem}/>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
