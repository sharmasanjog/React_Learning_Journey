import { useContext } from "react";
import React from "react";
import "./App.css";
import Counter from "./Components/Counter.jsx";
import { CounterContext } from "./Contexts/Counter.jsx";

function App() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h1>Count  is {count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
