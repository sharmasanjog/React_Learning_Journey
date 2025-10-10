import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (charAllowed) str += "!@#$%^&*()_+<>?/{}~|"
    if (numberAllowed) str += "0123456789"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  // Automatically generate password whenever options change
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // Copy password to clipboard
  const copyToClipboard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4 text-center'>
          Password Generator
        </h1>

        <div className='flex mb-4'>
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className='w-full p-2 border border-gray-300 rounded text-center text-lg font-mono'
          />
          <button
            onClick={copyToClipboard}
            className='ml-2 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-500'
          >
            Copy
          </button>
        </div>

        <div className='flex items-center mb-4'>
          <span className='text-gray-700 mr-2'>Length: {length}</span>
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='w-full accent-blue-600'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-gray-700'>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className='accent-blue-600 mr-2'
            />
            Include Numbers
          </label>
          <label className='text-gray-700'>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
              className='accent-blue-600 mr-2'
            />
            Include Symbols
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className='w-full mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500'
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default App
