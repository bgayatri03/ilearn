import "./App.css";
import SnakesAndLadders from "./SnakesAndLaddersGame";
import SnakesAndLaddersGameNew from "./SnakesAndLaddersGameNew";
import HomePage from "./HomePage/homePage";
import LearningCategories from "./Learn/learningCategories";
import Learn from "./Learn/learn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import StartGame from './SnakesAndLadders/StartGame'
import Test from "./Test/Test";

function App() {
  // const [currentPosition, setCurrentPosition] = useState(0);
  // const [displayLayout, setDisplayLayout] = useState(false)
  // const initGame = () => {
  //   console.log("Inside initGame")
  //   setDisplayLayout(true)
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/learningCategories" element={<LearningCategories />}/>
          <Route exact path="/learn" element={<Learn />} />
          <Route exact path="/snakesAndLaddersGame" element={<SnakesAndLadders />} />
          <Route exact path="/startGame" element={<StartGame/>}/>
          <Route exact path="/test" element={<Test/>}/>
          <Route exact path="//snakesAndLaddersGameNew" element={<SnakesAndLaddersGameNew/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
