import { useState } from 'react'
// import './App.css'
import type { Mark, Player, Cell, Board, GameStatus } from './game.ts'
import { statusOf} from './game.ts'

function Square({ value, onClick }: { value: Mark; onClick: ()=> void }){
  return(
    <button 
    onClick={onClick}
    className='w-full h-full aspect-square flex flex-wrap items-center justify-center border border-black'
      >
        {value ?? ''}
      </button>
  )
}

const cells= Array.from({length:9}, (_, i) => i)

function BoardView(){
  const [turn, setTurn] = useState<Player>('X')
  const [board, setBoard] = useState<Mark[]>(Array(9).fill(null))
  
const result = statusOf(board);
const gameOver = result.status !== 'playing';

  function handleClick(i: number){
    if (gameOver || board[i] !== null) return; 
      const copy = [...board]
      copy[i] = turn

      setBoard(copy)
      setTurn(turn === 'X' ? 'O' : 'X')
  }

  return(
      <div className='grid grid-cols-3 gap-2'>
        {cells.map(i => <Square key={i} value={board[i]} onClick={()=> handleClick(i)}/>)}
      </div>
  );
}

function App() {
  return (
    <>
      <h1 className= 'flex justify-center'>Tic Tac Toe</h1>
      <div className='flex-lg h-7'>
        <div>
          <BoardView />
        </div>
      </div>
    </>
  )
}

export default App