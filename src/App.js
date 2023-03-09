import './App.css';
//import Dice from './Dice'
//import SnakesAndLaddersBoardGrid from './SnakesAndLaddersComponents/SnakesAndLaddersBoardGrid'
// import SnakesAndLaddersGrid from './SnakesAndLadders/SnakesAndLaddersGrid'
import SnakesAndLadders from './SnakesAndLaddersGame';
import HomePage from './HomePage/homePage';
import LearnCategories from './Learn/learnCategories';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/snakesAndLaddersGame" element={<SnakesAndLadders />} />
          <Route exact path="/learnCategories" element={<LearnCategories/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
