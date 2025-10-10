import React, { useContext } from "react";
import { CounterContext } from "../Contexts/Counter.jsx";

function Counter() {
  const counterContext = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => counterContext.increment()}>Increment</button>
      <button onClick={() => counterContext.decrement()}>Decrement</button>
    </div>
  );
}

export default Counter;
