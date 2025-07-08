import { Link } from 'react-router-dom';
import Heading from './heading';
import Navigation from './Navigation';
import '../assets/stylesheets/heading.css';
import '../assets/stylesheets/navigation.css';
import '../assets/stylesheets/pages.css';

function About() {
  return (
    <div>
      <Navigation />
      <Heading />
      <div className="about-container">
        <h2>About Tic-Tac-Toe</h2>
        <div className="about-content">
          <p>
            Tic-Tac-Toe is a classic two-player game where players take turns marking 
            spaces in a 3×3 grid. The player who succeeds in placing three of their 
            marks in a horizontal, vertical, or diagonal row wins the game.
          </p>
          
          <h3>How to Play:</h3>
          <ul>
            <li>Players take turns placing their mark (X or O) on the board</li>
            <li>The first player to get three marks in a row wins</li>
            <li>If all spaces are filled without a winner, the game is a draw</li>
            <li>Click "Reset Game" to start a new game at any time</li>
          </ul>
          
          <h3>Game Features:</h3>
          <ul>
            <li>Clean, modern interface</li>
            <li>Responsive design</li>
            <li>Easy game reset</li>
            <li>Built with React and modern web technologies</li>
          </ul>
          
          <div className="about-actions">
            <Link to="/game" className="play-button">
              Play Now
            </Link>
            <Link to="/" className="home-button">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 