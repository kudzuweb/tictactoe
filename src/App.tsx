import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { Mark } from './game.tsx'
import type { Cell } from './game.tsx'
import type { Board } from './game.tsx'
import type { GameStatus } from './game.tsx'

interface SquareProps {
  onClick: () => void
  value: Mark
}

function Square ({ onClick, value }: SquareProps) {
  return(
    <button onClick={onClick} >{value}</button>
  )
}

interface BoardProps{

}

cells = [0,1,2,3,4,5,6,7,8]

function Board(){
  return(
    <div className='grid grid-cols-3 gap 2'>
      {cells.map(i => <Square key={i} />)}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Board />
      </div>
    </>
  )
}

export default App
