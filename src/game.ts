type Mark = 'X' | 'O' | null
type Player = 'X' | 'O'
type Board = Mark[]; // length 9
type WinStatus = "playing" | "won" | "draw"


interface GameState {
    winstatus: WinStatus,
    board: Board,
    winner?: Player,
    winningline?: number[],
    turn: Player
}

let gameState: GameState = {
    winstatus: "playing",
    board: [null, null, null, null, null, null, null, null, null],
    turn: 'X'
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

function makeMove(i: number) {
    debugger;
    // Validate input
    if (gameState.winstatus !== "playing") return gameState;
    else if (gameState.board[i] !== null) return gameState;

    let nextGameState = structuredClone(gameState);

    // Process input
    nextGameState.board[i] = gameState.turn;

    // Update state
    nextGameState.turn = nextGameState.turn === "X" ? "O" : "X"
    nextGameState = statusOf(nextGameState);
    gameState = nextGameState;

    // Return output
    return nextGameState;
}

function statusOf(gameState: GameState): GameState {
    const board = gameState.board;

    // Check for winner
    for (const [a, b, c] of winlines) {
        const first = board[a];
        if (first && board[b] === first && board[c] === first) {
            gameState.winstatus = "won";
            gameState.winningline = [a, b, c];
            gameState.winner = first;
            return gameState;
        }
    }

    // Check for tie
    if (!board.includes(null)) {
        gameState.winstatus = "draw";
        return gameState;
    }

    // Nothing changed
    return gameState;
}

export type { Mark, Player, Cell, Board, WinStatus, GameState }
export { statusOf, makeMove }