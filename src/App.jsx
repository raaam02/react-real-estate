import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='width-full bg-gray-200'>
      <h1 className='bg-indigo-500'>Real Estate</h1>
    </div>
    </>
  )
}

export default App
