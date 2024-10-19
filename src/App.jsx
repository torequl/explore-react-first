import { useState } from 'react'
import './App.css'
import Friends from './user'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <h3>React + Vite</h3>
      <Friends> </Friends>
      </>
  )
}

export default App
