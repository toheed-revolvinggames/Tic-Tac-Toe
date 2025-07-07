import { useState, useEffect } from 'react';
import Square from './Square';
import { calculateWinner } from './utils';
import { BotTurn } from './utils';

export default function Board() {
    const [xIsNext, setXIsNext] = useState(Math.random() > 0.5);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isBotThinking, setIsBotThinking] = useState(false);

    // Handle bot's turn with delay
    useEffect(() => {
        if (!xIsNext && !calculateWinner(squares)) {
            setIsBotThinking(true);
            const timer = setTimeout(() => {
                const botMoveIndex = BotTurn(squares, 'O');
                if (botMoveIndex !== null && !squares[botMoveIndex]) {
                    const nextSquares = [...squares];
                    nextSquares[botMoveIndex] = 'O';
                    setSquares(nextSquares);
                    setXIsNext(true);
                }
                setIsBotThinking(false);
            }, 2000);
            
            return () => clearTimeout(timer);
        }
    }, [xIsNext, squares]);

    function handleClick(i) {
        // Prevent clicks during bot's thinking time
        if (calculateWinner(squares) || squares[i] || !xIsNext || isBotThinking) {
            return;
        }
        
        const nextSquares = [...squares];
        nextSquares[i] = 'X';
        setSquares(nextSquares);
        setXIsNext(false);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else if (squares.every(square => square !== null)) {
        status = 'Game ended in a draw!';
    } else {
        status = xIsNext ? 'Your turn (X)' : 'Bot is thinking...';
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                {status}
            </div>
            <div className="board">
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} disabled={isBotThinking} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} disabled={isBotThinking} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} disabled={isBotThinking} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} disabled={isBotThinking} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} disabled={isBotThinking} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} disabled={isBotThinking} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} disabled={isBotThinking} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} disabled={isBotThinking} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} disabled={isBotThinking} />
                </div>
            </div>
        </div>
    );
}