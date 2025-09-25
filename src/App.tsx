import { useState } from 'react'
// import './App.css'
import type { Mark, Player, Cell, Board, WinStatus, GameState } from './gameEngine.ts'
import gameEngine from './gameEngine.ts'
import gameApi from './gameApi.ts'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'


// React Query functions
const qc= useQueryClient()
const loadGame = useQuery({ queryKey: ['game', id], queryFn: ()=> gameApi.getGame(id) })
const makeMove = useMutation({mutationFn: (i: number) => 
  gameApi.postMove(id, i)
})

// React components

// tile component: renders a clickable square that passes empty click up
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

// board component: renders a 3x3 board of tiles; click from child component updates state
const cells = Array.from({ length: 9 }, (_, i) => i)

function BoardView() {
  const [board, setBoard] = useState<Mark[]>(Array(9).fill(null))

  function handleClick(i: number) {
    const nextGameState = gameEngine.makeValidMove(i);

    setBoard(nextGameState.board);
  }

  return (
    <div className='grid grid-cols-3 gap-2'>
      {cells.map(i => <Square key={i} value={board[i]} onClick={() => handleClick(i)} />)}
    </div>
  );
}

//main app: displays board component and game name
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