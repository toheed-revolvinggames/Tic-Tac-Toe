import { useState } from 'react';
import Board from './board';
import Heading from './heading';
import Navigation from './Navigation';

import '../assets/stylesheets/board.css';
import '../assets/stylesheets/square.css';
import '../assets/stylesheets/heading.css';
import '../assets/stylesheets/navigation.css';

function Game() {
  const [gameKey, setGameKey] = useState(0);

  const resetGame = () => {
    setGameKey(prevKey => prevKey + 1);
  }

  return (
    <div>
      <Navigation />
      <Heading />
      <div className="game">
        <Board key={gameKey} />
        <button onClick={resetGame} className="reset-button">
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default Game; 