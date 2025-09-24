type Mark = 'X' | 'O' | null
type Player = 'X' | 'O'
type Cell = Player | null
type Board = Cell[]; // length 9
type GameStatus = "playing" | "won" | "draw"

interface StatusResult {
    status: GameStatus;
    winner?: Player;
    line?: number[];
}

const winlines: number[][] = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // cols
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonals
  [0, 4, 8],
  [2, 4, 6],
];

function statusOf(board: Board): StatusResult {
    for (const [a, b, c] of winlines) {
        const first = board[a];
        if (first && board[b] === first && board[c] === first){
            return{ status: "won", winner: first, line: [a, b, c]}
        }
    }
    if (!board.includes(null)) return {status: "draw"};
    return { status: 'playing'};
}

export type { Mark, Player, Cell, Board, GameStatus, StatusResult }
export { statusOf }