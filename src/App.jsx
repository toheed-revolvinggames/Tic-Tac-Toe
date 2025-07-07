import { useState } from 'react';
import Board from './components/board';
import Heading from './components/heading';

import './assets/stylesheets/board.css';
import './assets/stylesheets/square.css';
import './assets/stylesheets/heading.css';
import './App.css';

function App() {
  const [gameKey, setGameKey] = useState(0);

  const resetGame = () => {
    setGameKey(prevKey => prevKey + 1);
  }

  return (
    <div>
      <Heading></Heading>
      <div className="game">
        <Board key={gameKey} />
        <button onClick={resetGame} className="reset-button">
          Reset Game
        </button>
      </div>
    </div>
  )
}

export default App;