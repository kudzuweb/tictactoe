import { useState } from 'react'
// import './App.css'
import type { Mark, Player, Cell, Board, WinStatus, GameState } from './game.ts'
import { makeMove, statusOf } from './game.ts'

function Square({ value, onClick }: { value: Mark; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className='w-full h-full aspect-square flex flex-wrap items-center justify-center border border-black'
    >
      {value ?? ''}
    </button>
  )
}

const cells = Array.from({ length: 9 }, (_, i) => i)

function BoardView() {
  const [board, setBoard] = useState<Mark[]>(Array(9).fill(null))

  function handleClick(i: number) {
    const nextGameState = makeMove(i);

    setBoard(nextGameState.board);
  }

  return (
    <div className='grid grid-cols-3 gap-2'>
      {cells.map(i => <Square key={i} value={board[i]} onClick={() => handleClick(i)} />)}
    </div>
  );
}

function App() {
  return (
    <>
      <h1 className='flex justify-center'>Tic Tac Toe</h1>
      <div className='flex-lg h-7'>
        <div>
          <BoardView />
        </div>
      </div>
    </>
  )
}

export default App