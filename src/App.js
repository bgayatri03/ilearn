import "./App.css";
import SnakesAndLadders from "./SnakesAndLaddersGame";
import HomePage from "./HomePage/homePage";
import LearningCategories from "./Learn/learningCategories";
import Learn from "./Learn/learn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/snakesAndLaddersGame"
            element={<SnakesAndLadders />}
          />
          <Route
            exact
            path="/learningCategories"
            element={<LearningCategories />}
          />
          <Route exact path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
