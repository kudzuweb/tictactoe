type Mark = 'X' | 'O' | null
type Cell = Mark | null
type Board = Cell[]; // length 9
type GameStatus = "playing" | "won" | "draw"

export { Mark, Cell, Board, GameStatus}