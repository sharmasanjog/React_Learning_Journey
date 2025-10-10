
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("Values added", counter);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    console.log("Values removed", counter);
    setCounter(counter - 1);
  }

  return (
    <>

    <h1>Day 3 of React_Learning</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={() => addValue()}>Add values</button>
    <br />
    <button onClick={() => removeValue()}>Remove values</button>
    </>
  )
}

export default App


  