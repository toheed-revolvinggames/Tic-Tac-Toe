export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function BotTurn(squares, botValue) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // --- check if bot can win in the next move
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === botValue && squares[b] === botValue && !squares[c]) {
      return c;
    }
    if (squares[a] === botValue && squares[c] === botValue && !squares[b]) {
      return b;
    }
    if (squares[b] === botValue && squares[c] === botValue && !squares[a]) {
      return a;
    }
  }

  // check if player can win in the next move and block them
  const playerValue = (botValue === 'X' ? 'O' : 'X');
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === playerValue && squares[b] === playerValue && !squares[c]) {
      return c;
    }
    if (squares[a] === playerValue && squares[c] === playerValue && !squares[b]) {
      return b;
    }
    if (squares[b] === playerValue && squares[c] === playerValue && !squares[a]) {
      return a;
    }
  }

  // --- if no immediate win or block, return the first empty square
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      return i;
    }
  }
  return null; // no valid move found
}