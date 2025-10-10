import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="h-screen flex flex-col justify-center items-center" style={{ backgroundColor: color }}>
      <h1 className="text-3xl font-bold mb-4">Change Background Color</h1>
      <div className="space-x-2">
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setColor("red")}>Red</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setColor("green")}>Green</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setColor("blue")}>Blue</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded" onClick={() => setColor("purple")}>Purple</button>
      </div>
    </div>
  )
}

export default App
