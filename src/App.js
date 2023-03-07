import logo from './logo.svg';
import './App.css';
import Dice from './Dice'
import SnakesAndLadders from './SnakesAndLaddersGame';
// import SnakesAndLaddersBoardGrid from './SnakesAndLaddersComponents/SnakesAndLaddersBoardGrid'
import SnakesAndLaddersGrid from './SnakesAndLadders/SnakesAndLaddersGrid'

function App() {
  return (
    <div className="App">
      {/* <h1 id='crazy'>I'm crazyyyy</h1> */}
      <SnakesAndLadders/>
      {/* <SnakesAndLaddersBoardGrid/> */}
      {/* <SnakesAndLaddersGrid /> */}
    </div>
  );
}

export default App;
