import "./App.css";
import SnakesAndLadders from "./SnakesAndLaddersGame";
import HomePage from "./HomePage/homePage";
import LearningCategories from "./Learn/learningCategories";
import Learn from "./Learn/learn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import StartGame from './SnakesAndLadders/StartGame'

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
