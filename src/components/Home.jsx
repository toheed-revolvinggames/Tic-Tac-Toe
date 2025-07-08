import { Link } from 'react-router-dom';
import Heading from './heading';
import '../assets/stylesheets/heading.css';
import '../assets/stylesheets/home.css';
import Navigation from './Navigation';

function Home() {
  return (
    <>
      <Navigation />
      <div className="home-container">
        <div className="home-content">
          <h2>Welcome to Tic-Tac-Toe!</h2>
          <p>Challenge yourself or play with a friend in this classic game.</p>
          
          <div className="game-options">
            <Link to="/game" className="play-button">
              Start New Game
            </Link>
            
            <Link to="/about" className="about-button">
              About the Game
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home; 