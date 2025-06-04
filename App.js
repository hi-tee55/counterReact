import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count === 0) {
      alert("Count cannot be less than 0");
      return;
    }
    setCount(count - 1);
  };
  const reset = () => setCount(0);
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
