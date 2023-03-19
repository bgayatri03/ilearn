import React, { useState } from "react";
import "./Styles/SnakesAndLaddersGameNew.css";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import mySoundData from "./subGame.json";
import SnakesAndLaddersGridWithRamda from "./SnakesAndLadders/SnakesAndLaddersGridWithRamda";
import Hurray from "./Images/party.gif";

const SnakesAndLaddersGameNew = (props) => {
  const myPosition = props.currentPlace;
  const modalState = props.modalState;
  const checkboxesValues = props.checkBoxValues;

  const [score, setScore] = useState(0);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [showGameOver, setShowGameOver] = useState(false);
  let checkboxes = [];
  if (props.level == "basic") {
    for (let i = 0; i < checkboxesValues.length; i++) {
      if (i == 0 && checkboxesValues[i] == true) {
        checkboxes.push({ name: "Animals", path: "./animal_category.png" });
      } else if (i == 1 && checkboxesValues[i] == true) {
        checkboxes.push({ name: "Birds", path: "./bird_category.png" });
      } else if (i == 2 && checkboxesValues[i] == true) {
        checkboxes.push({ name: "General", path: "./general_category.png" });
      }
    }
  }
  const [myNum, setMyNum] = useState(0);
  let audio = new Audio("/DiceRollingSound.mp3");

  let soundData = [];
  let soundRecord;
  let mySoundRecord;
  if (props.level == "basic") {
    for (let i = 0; i < mySoundData.length; i++) {
      for (let j = 0; j < checkboxes.length; j++) {
        if (mySoundData[i].category == checkboxes[j].name) {
          soundData.push(mySoundData[i]);
        }
      }
    }
    soundRecord = soundData[Math.floor(Math.random() * soundData.length)];
    mySoundRecord = new Audio(soundRecord.path);
  } else {
    soundRecord = mySoundData[Math.floor(Math.random() * mySoundData.length)];
    mySoundRecord = new Audio(soundRecord.path);
  }

  const soundCardHandler = () => {
    mySoundRecord.playbackRate = 1;
    mySoundRecord.play();
  };

  const slowSoundCardHandler = () => {
    mySoundRecord.playbackRate = 0.5;
    mySoundRecord.play();
  };

  const categorydescription = [
    {
      id: 0,
      name: "Animals",
      image: "",
    },
    {
      id: 1,
      name: "Birds",
      image: "",
    },
    {
      id: 2,
      name: "General",
      image: "",
    },
  ];

  const rollDice = () => {
    audio.play();
    var dice = Math.floor(Math.random() * 6 + 1);
    setMyNum(dice);
    changeTokenPosition(dice);
  };

  const changeTokenPosition = (dice) => {
    if (myPosition + dice >= 100) {
      setShowGameOver(true);
    } else {
      props.changePosition(myPosition + dice);
    }
  };

  const changeGameOverModalShow = () => {
    setShowGameOver(false);
  };

  const checkAnswer = (e) => {
    const clickedCardId = e.currentTarget.id;
    setQuestionsAsked(questionsAsked + 1);

    if (clickedCardId == soundRecord.answer) {
      setScore(score + 1);
      alert("Yayy! Correct Answer");
      props.changeModalState();
      if (props.currentPlace < props.snakeOrLadderPosition) {
        props.updatePositionAfterSnakeOrLadder(props.snakeOrLadderPosition);
      }
    } else {
      alert("Oops! Wrong Answer");
      props.changeModalState();
      if (props.currentPlace > props.snakeOrLadderPosition) {
        props.updatePositionAfterSnakeOrLadder(props.snakeOrLadderPosition);
      }
    }
  };
  return (
    <div className="snakesAndLaddersGameContainer">
      <div className="diceContainer">
        <div
          id="dice1"
          className={`diceStyle dice-style-one  showSide-${myNum}`}
        >
          <div id="dice-one-side-one" className="diceSide one">
            <div className="dots one-1"></div>
          </div>
          <div id="dice-one-side-two" className="diceSide two">
            <div className="dots two-1"></div>
            <div className="dots two-2"></div>
          </div>
          <div id="dice-one-side-three" className="diceSide three">
            <div className="dots three-1"></div>
            <div className="dots three-2"></div>
            <div className="dots three-3"></div>
          </div>
          <div id="dice-one-side-four" className="diceSide four">
            <div className="dots four-1"></div>
            <div className="dots four-2"></div>
            <div className="dots four-3"></div>
            <div className="dots four-4"></div>
          </div>
          <div id="dice-one-side-five" className="diceSide five">
            <div className="dots five-1"></div>
            <div className="dots five-2"></div>
            <div className="dots five-3"></div>
            <div className="dots five-4"></div>
            <div className="dots five-5"></div>
          </div>
          <div id="dice-one-side-six" className="diceSide six">
            <div className="dots six-1"></div>
            <div className="dots six-2"></div>
            <div className="dots six-3"></div>
            <div className="dots six-4"></div>
            <div className="dots six-5"></div>
            <div className="dots six-6"></div>
          </div>
        </div>
        <button id="rollButton" onClick={rollDice}>
          Roll Dice
        </button>
      </div>
      <div className="snakesAndLaddersBoardContainer">
        <div className="gridOuterSquare snakesAndLaddersBoardImage">
          <SnakesAndLaddersGridWithRamda myPosition={myPosition} />
        </div>
      </div>

      {modalState && (
        <Modal open={modalState} onClose={props.changeModalState}>
          <Box className="modal-box-game">
            <div className="modalContentContainer">
              <div className="instructionContainer">
                <span className="instructionText">Identify the category</span>
                <button id="instructionButton">
                  <QuestionMarkIcon style={{ fontSize: 30 }} />
                </button>
              </div>
              <div className="soundButtonsContainer">
                <button className="soundCardButton" onClick={soundCardHandler}>
                  <VolumeUpIcon style={{ fontSize: 50, color: "#fff" }} />
                </button>
                <button
                  className="slowSoundButton"
                  onClick={slowSoundCardHandler}
                >
                  <SlowMotionVideoIcon
                    style={{ fontSize: 35, color: "#fff" }}
                  />
                </button>
              </div>
              {props.level === "basic" ? (
                <div className="optionsContainer">
                  {checkboxes.map((item, index) => (
                    <div
                      id={item.name}
                      key={index}
                      className="optionCard"
                      onClick={checkAnswer}
                    >
                      <img
                        className="optionsImage"
                        src={checkboxes[index].path}
                      />
                    </div>
                  ))}
                </div>
              ) : null}
              {props.level === "advance" ? (
                <div className="optionsContainer">
                  <div
                    id="Animals"
                    className="optionCard"
                    onClick={checkAnswer}
                  >
                    <img className="optionsImage" src="/animal_category.png" />
                  </div>
                  <div id="Birds" className="optionCard" onClick={checkAnswer}>
                    <img className="optionsImage" src="/bird_category.png" />
                  </div>
                  <div
                    id="General"
                    className="optionCard"
                    onClick={checkAnswer}
                  >
                    <img className="optionsImage" src="/general_category.png" />
                  </div>
                </div>
              ) : null}
            </div>
          </Box>
        </Modal>
      )}

      {showGameOver && (
        <Modal open={showGameOver} onClose={changeGameOverModalShow}>
          <Box className="modal-box">
            <h1 className="hurrayStyle">Hurrayy!</h1>
            <h2 className="yourScoreStyle">
              Your score is {score}/{questionsAsked}
            </h2>
            <img className="gifStyle" src={Hurray} />
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default SnakesAndLaddersGameNew;
