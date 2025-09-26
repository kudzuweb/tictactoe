import { useState, useEffect } from 'react'
// import './App.css'
import type { Mark, Player, Cell, Board, WinStatus, GameState } from './gameEngine.ts'
import gameApi from './gameApi.ts'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'

// React Query function hook
function useGame(id:string) {
  const qc= useQueryClient();
  
  const loadGame = useQuery({ 
    queryKey: ['game', id], 
    queryFn: ()=> gameApi.getGame(id!), 
    enabled: !!id });
  
  const makeMove = useMutation({
    mutationFn: (i: number) => 
    gameApi.postMove(id, i),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["game", id] })
  });
  
  return {
    board: (game.data?.board ?? []) as Mark[],
    turn: (game.data?.turn ?? "X") as Exclude<Mark, null>,
    makeMove: (i: number) => move.mutate(i),
    loading: game.isPending,
    error: game.isError,
    makingMove: move.isPending,
  };

}
  
 

// React components

// tile component: renders a clickable square that passes empty click up
function Square({ value, onClick, disabled }: { value: Mark; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='w-full h-full aspect-square flex flex-wrap items-center justify-center border border-black'
    >
      {value ?? ''}
    </button>
  )
}

// board component: renders a 3x3 board of tiles; click from child component updates state

function BoardView() {
  const cells = Array.from({ length: 9 }, (_, i) => i)

  if (loadGame.isLoading) return <div>Loading...</div>
  if (loadGame.isError) return <div>Failed to load</div>

  return (
    <div className='grid grid-cols-3 gap-2'>
      {cells.map(i => <Square key={i} value={loadGame.data?.board[i] ?? null} onClick={() => makeMove.mutate(i)} disabled= {makeMove.isPending} />)}
    </div>
  );
}

//main app: displays board component and game name
function App() {
  const initialId = new URLSearchParams(window.location.search).get('id');
  const [id, setId] = useState<string | null>(initialId);

  useEffect(()=> {
    if (!id) {
      (async ()=> {
        const game = await gameApi.newGame();
        setId(game.id);
        const url = new URL(window.location.href);
        url.searchParams.set('id', game.id);
        window.history.replaceState({}, '', url)
      });
    }
  }, [id])

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