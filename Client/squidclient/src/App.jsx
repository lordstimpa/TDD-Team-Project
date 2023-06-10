import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import APIStatus from './components/APIInformationStatus/APIStatus'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite & React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          This button does nothing but you can press it: {count}
        </button>
      </div>
      <APIStatus />
    </>
  )
}

export default App
