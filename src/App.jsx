import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "container">
      <img src="src/assets/collage.png" alt="collage" />
    </div>
  )
}

export default App
