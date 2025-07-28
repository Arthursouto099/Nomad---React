import { useState } from 'react'


import './App.css'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width: "100vw", height: "100vh", overflowX: "hidden"}}>
      <Home></Home>
    </div>
  )
}

export default App
