// import './App.css'
import { useState } from 'react'
import type { Player, Cell, Board, GameStatus } from './game.tsx'

function ReApp() {
  const [move, setMove] = useState(undefined)

  return (
    <>
      <div>
        <h1 className= 'flex justify-center'>Tic Tac Toe</h1>
        <div className='w-full h-1/3 flex flex-wrap items-center justify-center'>
          <button className="w-1/3 aspect-square border border-black flex items-center justify-center"></button>
          <button className="w-1/3 aspect-square border border-gray-400 flex items-center justify-center"></button>
          <button className="w-1/3 aspect-square border border-gray-400 flex items-center justify-center"></button>
        </div>
        <div className='w-full h-1/3 flex flex-wrap items-center justify-center'>
          <button className="w-1/3 aspect-square border border-gray-400 flex items-center justify-center"></button>
          <button className="w-1/3 aspect-square border border-gray-400 flex items-center justify-center"></button>
          <button className="w-1/3 aspect-square border border-gray-400 flex items-center justify-center"></button>
        </div>
        <div className='w-full h-1/3 flex flex-wrap items-center justify-center'>
          <button className="w-1/3 aspect-square border border-gray-400 flex items-center justify-center"></button>
          <button className="w-1/3 aspect-square border border-gray-400 flex items-center justify-center"></button>
          <button className="w-1/3 aspect-square border border-gray-400 flex items-center justify-center"></button>
        </div>
      </div>
    </>
  )
}

export default ReApp 