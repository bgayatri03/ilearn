import React, { useState } from "react";
import SnakesAndLadders from "../SnakesAndLaddersGame";
import SnakesAndLaddersGameNew from "../SnakesAndLaddersGameNew";
import { Radio } from "@mui/material";
import { Checkbox } from "@mui/material";
import { allSnakesBoxes, allLaddersBoxes } from "./SnakeLadderPositions";
import Navbar from "../Navbar";
import "../Styles/StartGame.css";
import { none } from "ramda";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const StartGame = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [displayLayout, setDisplayLayout] = useState(false);
  const [hideThemeScreen, setHideThemeScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [checkAnimals, setCheckAnimals] = useState(false);
  const [checkBirds, setCheckBirds] = useState(false);
  const [checkGeneral, setCheckGeneral] = useState(false);
  const [snakeOrLadderPosition, setSnakeOrLadderPosition] = useState(0);

  const initGame = () => {
    setDisplayLayout(true);
    setHideThemeScreen(true);
  };
  const updatePosition = (newPosition) => {
    setTimeout(() => {
      setCurrentPosition(newPosition);
    }, 1000);
    checkForSnakeOrLadder(newPosition);
  };

  const updatePositionAfterSnakeOrLadder = (newPosition) => {
    setShowModal(false);
    setTimeout(() => {
      setCurrentPosition(newPosition);
    }, 1000);
  };

  const checkForSnakeOrLadder = (newPosition) => {
    const positionToCheckForSnakeOrLadder = newPosition;
    allSnakesBoxes.forEach((snake) => {
      if (snake.currentPosition === positionToCheckForSnakeOrLadder) {
        setShowModal(true);
        setSnakeOrLadderPosition(snake.moveToPosition);
        // alert(
        //     `Bad Luck! Snake caught you - Going to position ${snake.moveToPosition
        //     }`
        // );
        // updatePosition(snake.moveToPosition)
      }
    });

    allLaddersBoxes.forEach((ladder) => {
      if (ladder.currentPosition === positionToCheckForSnakeOrLadder) {
        setShowModal(true);
        setSnakeOrLadderPosition(ladder.moveToPosition);
        // alert(
        //     `Great! Ladder taking u to position ${ladder.moveToPosition
        //     }`
        // );
        // updatePosition(ladder.moveToPosition)
      }
    });
  };

  const updateModalState = () => {
    setShowModal(false);
  };

  const changeHandler = (e) => {
    setSelectedLevel(e.target.value);
  };

  // const handleChangeAnimals = () => {
  //     const newAnimal = !checkAnimals;
  //     setCheckAnimals(newAnimal)
  // }

  // const handleChangeBirds = () => {
  //     const newBirds = !checkBirds;
  //     setCheckBirds(newBirds)
  // }

  // const handleChangeGeneral = () => {
  //     const newGeneral = !checkGeneral;
  //     setCheckGeneral(newGeneral)
  // }

  const categoryArray = ["Animals", "Birds", "General"];

  const [checkedState, setCheckedState] = useState(
    new Array(categoryArray.length).fill(false)
  );

  const handleOnChange = (position, e) => {
    if (checkedState.filter((i) => i).length >= 2 && e.target.checked) return;
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="startGameContainer" data-testid="startGameContainer">
      <Navbar />
      {!hideThemeScreen && (
        <div className="themeSelectionContainer">
          <div className="themeSelectionBox shadow">
            <div className="fieldContainer">
              <h2 className="comicSansFont levelSelectionHeading">
                Select Level
              </h2>
              <div className="radioButtonsContainer">
                <div>
                  <input
                    className="inputForRadioButton"
                    type="radio"
                    name="level"
                    value="basic"
                    checked={selectedLevel === "basic"}
                    onChange={changeHandler}
                  />
                  {/* <Radio className="inputForRadioButton" value="basic" color="success" checked={selectedLevel === "basic"} onChange={changeHandler} /> */}
                  <label
                    className="labelForRadioButton comicSansFont"
                    htmlFor="basic"
                  >
                    Basic
                  </label>
                </div>
                <div>
                  <input
                    className="inputForRadioButton"
                    type="radio"
                    name="level"
                    value="advance"
                    checked={selectedLevel === "advance"}
                    onChange={changeHandler}
                  />
                  {/* <Radio className="inputForRadioButton" value="advance" color="success" checked={selectedLevel === "advance"} onChange={changeHandler} /> */}
                  <label
                    className="labelForRadioButton comicSansFont"
                    htmlFor="advance"
                  >
                    Advance
                  </label>
                </div>
              </div>

              {selectedLevel === "basic" ? (
                <div className="checkBoxesWrapper">
                  <h2 className="comicSansFont levelSelectionHeading">
                    Select Themes
                  </h2>
                  <div className="checkBoxesContainer">
                    {categoryArray.map((item, index) => (
                      <div>
                        <Checkbox
                          id={`custom-checkbox-${index}`}
                          name={item}
                          value={item}
                          checked={checkedState[index]}
                          onChange={(e) => handleOnChange(index, e)}
                          color="success"
                        />
                        <label
                          className="labelForRadioButton comicSansFont"
                          htmlFor="animals"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                none
              )}
            </div>
            <div className="outerStartButton">
              <button id="startGameButton" onClick={initGame}>
                <PlayArrowIcon style={{ fontSize: 44, marginTop: 5 }} />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* {hideThemeScreen && <SnakesAndLadders currentPlace={currentPosition} changePosition={updatePosition} changeModalState={updateModalState} modalState={showModal} checkBoxValues={checkedState} level={selectedLevel} snakeOrLadderPosition={snakeOrLadderPosition} updatePositionAfterSnakeOrLadder={updatePositionAfterSnakeOrLadder}/>} */}

      {hideThemeScreen && (
        <SnakesAndLaddersGameNew
          currentPlace={currentPosition}
          changePosition={updatePosition}
          changeModalState={updateModalState}
          modalState={showModal}
          checkBoxValues={checkedState}
          level={selectedLevel}
          snakeOrLadderPosition={snakeOrLadderPosition}
          updatePositionAfterSnakeOrLadder={updatePositionAfterSnakeOrLadder}
        />
      )}
    </div>
  );
};
// SnakesAndLaddersGameNew
export default StartGame;
