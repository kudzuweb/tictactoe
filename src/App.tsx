import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Mark = 'X' | 'O' | null

const Cell =(onClick, value)=> {
  <button className= "cell" onClick={}>{value}</button>
}

const Board =()=> {

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
