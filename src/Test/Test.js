import React, { useState, useRef, useEffect } from "react";
import QuestionsData from "./Questions.json";
import "../Styles/test.css";
import Navbar from "../Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { none } from "ramda";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import Hurray from "../Images/party.gif";
import TimesUp from "../Images/timesup.gif";
import OhNo from "../Images/oh_no.gif";

const Test = () => {
  const deadline = "March, 17, 2023";
  const time = Date.parse(deadline) - Date.now();

  const [selectedSet1, setSelectedSet1] = useState("");
  const [selectedSet2, setSelectedSet2] = useState("");
  const [selectedSet3, setSelectedSet3] = useState("");
  const [selectedSet4, setSelectedSet4] = useState("");
  const [selectedSet5, setSelectedSet5] = useState("");
  const [selectedSet6, setSelectedSet6] = useState("");
  const [selectedSet7, setSelectedSet7] = useState("");
  const [selectedSet8, setSelectedSet8] = useState("");
  const [selectedSet9, setSelectedSet9] = useState("");
  const [selectedSet10, setSelectedSet10] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [showFailScore, setShowFailScore] = useState(false);
  const [showTimeout, setShowTimeout] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState("00:00:00");
  const [isTimeout, setIsTimeout] = useState(false);

  const Ref = useRef(null);

  const remainingTime = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    if (total == 0 && seconds == 0 && minutes == 0 && hours == 0) {
      getAnswersWithTimeout();
      setTimeout(() => {
        setShowTimeout(true);
      }, 1000);
    }
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = remainingTime(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:01:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setMinutes(deadline.getMinutes() + 2);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const radioChangeHandler = (e, idSelected) => {
    console.log("inside radio...id", idSelected);
    console.log("e.target.value in test 1", e.target.value);
    if (idSelected == 1) {
      setSelectedSet1(e.target.value);
    } else if (idSelected == 2) {
      setSelectedSet2(e.target.value);
    } else if (idSelected == 3) {
      setSelectedSet3(e.target.value);
    } else if (idSelected == 4) {
      setSelectedSet4(e.target.value);
    } else if (idSelected == 5) {
      setSelectedSet5(e.target.value);
    } else if (idSelected == 6) {
      setSelectedSet6(e.target.value);
    } else if (idSelected == 7) {
      setSelectedSet7(e.target.value);
    } else if (idSelected == 8) {
      setSelectedSet8(e.target.value);
    } else if (idSelected == 9) {
      setSelectedSet9(e.target.value);
    } else if (idSelected == 10) {
      setSelectedSet10(e.target.value);
    }
  };

  let correctAnswers = 0;

  const getAnswers = () => {
    console.log("selectedSet1", selectedSet1, QuestionsData[0].answer);
    console.log("selectedSet2", selectedSet2, QuestionsData[1].answer);
    console.log("selectedSet3", selectedSet3, QuestionsData[2].answer);
    console.log("selectedSet4", selectedSet4, QuestionsData[3].answer);
    console.log("selectedSet5", selectedSet5, QuestionsData[4].answer);
    console.log("selectedSet6", selectedSet6, QuestionsData[5].answer);
    console.log("selectedSet7", selectedSet7, QuestionsData[6].answer);
    console.log("selectedSet8", selectedSet8, QuestionsData[7].answer);
    console.log("selectedSet9", selectedSet9, QuestionsData[8].answer);
    console.log("selectedSet10", selectedSet10, QuestionsData[9].answer);

    if (QuestionsData[0].answer == selectedSet1) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[1].answer == selectedSet2) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[2].answer == selectedSet3) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[3].answer == selectedSet4) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[4].answer == selectedSet5) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[5].answer == selectedSet6) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[6].answer == selectedSet7) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[7].answer == selectedSet8) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[8].answer == selectedSet9) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[9].answer == selectedSet10) {
      correctAnswers = correctAnswers + 1;
    }

    console.log("Correctly answered out of 10...", correctAnswers);
    setScore(correctAnswers);

    setTimeout(() => {
      if (correctAnswers > 5) {
        setShowScore(true);
      } else {
        setShowFailScore(true);
      }
    }, 1000);
  };

  const getAnswersWithTimeout = () => {
    console.log("selectedSet1", selectedSet1, QuestionsData[0].answer);
    console.log("selectedSet2", selectedSet2, QuestionsData[1].answer);
    console.log("selectedSet3", selectedSet3, QuestionsData[2].answer);
    console.log("selectedSet4", selectedSet4, QuestionsData[3].answer);
    console.log("selectedSet5", selectedSet5, QuestionsData[4].answer);
    console.log("selectedSet6", selectedSet6, QuestionsData[5].answer);
    console.log("selectedSet7", selectedSet7, QuestionsData[6].answer);
    console.log("selectedSet8", selectedSet8, QuestionsData[7].answer);
    console.log("selectedSet9", selectedSet9, QuestionsData[8].answer);
    console.log("selectedSet10", selectedSet10, QuestionsData[9].answer);

    if (QuestionsData[0].answer == selectedSet1) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[1].answer == selectedSet2) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[2].answer == selectedSet3) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[3].answer == selectedSet4) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[4].answer == selectedSet5) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[5].answer == selectedSet6) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[6].answer == selectedSet7) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[7].answer == selectedSet8) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[8].answer == selectedSet9) {
      correctAnswers = correctAnswers + 1;
    }
    if (QuestionsData[9].answer == selectedSet10) {
      correctAnswers = correctAnswers + 1;
    }

    console.log("Correctly answered out of 10...", correctAnswers);
    setScore(correctAnswers);
  };

  const changeModalShow = () => {
    setShowScore(false);
  };
  const changeFailModalShow = () => {
    setShowFailScore(false);
  };

  const changeTimeoutShow = () => {
    setShowTimeout(false);
    window.location.pathname = "/";
  };

  const playSoundTrack = (e) => {
    const clickedDivId = e.currentTarget.id;
    let separatedStrings = clickedDivId.split("_");
    console.log("clickedDivId...", separatedStrings);
    let soundTrackToBePlayed;
    QuestionsData.forEach((item) => {
      if (separatedStrings[0] == item.id && separatedStrings[1] == "audio1") {
        soundTrackToBePlayed = item.audio1;
      } else if (
        separatedStrings[0] == item.id &&
        separatedStrings[1] == "audio2"
      ) {
        soundTrackToBePlayed = item.audio2;
      } else if (
        separatedStrings[0] == item.id &&
        separatedStrings[1] == "audio3"
      ) {
        soundTrackToBePlayed = item.audio3;
      } else if (
        separatedStrings[0] == item.id &&
        separatedStrings[1] == "audio4"
      ) {
        soundTrackToBePlayed = item.audio4;
      }
    });
    let currentSoundToPlay = new Audio(soundTrackToBePlayed);
    currentSoundToPlay.play();
  };

  return (
    <div className="testContainer">
      <Navbar />
      <div className="timerDiv">
        <h2>{timer}</h2>
      </div>
      <div className="questionsSwiperDiv">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="questionsSeries"
        >
          {QuestionsData.map((item, index) => (
            <SwiperSlide key={index} className="questionSlide">
              <h2>Question {QuestionsData[index].id}</h2>
              <div className="questionImageCard">
                <img
                  className="questionImage"
                  src={QuestionsData[index].image}
                />
              </div>
              <div className="optionsDiv">
                <div className="singleRadioButtonAndCard">
                  <input
                    className="radioButtonInputCircle"
                    type="radio"
                    name="audio"
                    checked={
                      `selectedSet${QuestionsData[index].id}` ===
                      QuestionsData[index].audio1_name
                    }
                    value={QuestionsData[index].audio1_name}
                    onChange={(e) =>
                      radioChangeHandler(e, QuestionsData[index].id)
                    }
                  />
                  <div
                    id={`${QuestionsData[index].id}_audio1`}
                    className="singleOptionCard"
                    onClick={playSoundTrack}
                  >
                    <VolumeUpIcon
                      id="volumeUpIconStyle"
                      className="volumeUpIconStyle"
                    />
                  </div>
                </div>
                <div className="singleRadioButtonAndCard">
                  <input
                    className="radioButtonInputCircle"
                    type="radio"
                    name="audio"
                    checked={
                      `selectedSet${QuestionsData[index].id}` ===
                      QuestionsData[index].audio2_name
                    }
                    value={QuestionsData[index].audio2_name}
                    onChange={(e) =>
                      radioChangeHandler(e, QuestionsData[index].id)
                    }
                  />
                  <div
                    id={`${QuestionsData[index].id}_audio2`}
                    className="singleOptionCard"
                    onClick={playSoundTrack}
                  >
                    <VolumeUpIcon
                      id="volumeUpIconStyle"
                      className="volumeUpIconStyle"
                    />
                  </div>
                </div>
                <div className="singleRadioButtonAndCard">
                  <input
                    className="radioButtonInputCircle"
                    type="radio"
                    name="audio"
                    checked={
                      `selectedSet${QuestionsData[index].id}` ===
                      QuestionsData[index].audio3_name
                    }
                    value={QuestionsData[index].audio3_name}
                    onChange={(e) =>
                      radioChangeHandler(e, QuestionsData[index].id)
                    }
                  />
                  <div
                    id={`${QuestionsData[index].id}_audio3`}
                    className="singleOptionCard"
                    onClick={playSoundTrack}
                  >
                    <VolumeUpIcon
                      id="volumeUpIconStyle"
                      className="volumeUpIconStyle"
                    />
                  </div>
                </div>
                <div className="singleRadioButtonAndCard">
                  <input
                    className="radioButtonInputCircle"
                    type="radio"
                    name="audio"
                    checked={
                      `selectedSet${QuestionsData[index].id}` ===
                      QuestionsData[index].audio4_name
                    }
                    value={QuestionsData[index].audio4_name}
                    onChange={(e) =>
                      radioChangeHandler(e, QuestionsData[index].id)
                    }
                  />
                  <div
                    id={`${QuestionsData[index].id}_audio4`}
                    className="singleOptionCard"
                    onClick={playSoundTrack}
                  >
                    <VolumeUpIcon
                      id="volumeUpIconStyle"
                      className="volumeUpIconStyle"
                    />
                  </div>
                </div>
              </div>
              {index === 9 ? (
                <div>
                  <button className="testSubmitButton" onClick={getAnswers}>
                    Submit
                  </button>
                </div>
              ) : (
                none
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {showScore && (
          <Modal open={showScore} onClose={changeModalShow}>
            <Box className="modal-box">
              <h1 className="hurrayStyle">Hurrayy!</h1>
              <h2 className="yourScoreStyle">Your score is {score}/10</h2>
              <img className="gifStyle" src={Hurray} />
            </Box>
          </Modal>
        )}
        {showFailScore && (
          <Modal open={showFailScore} onClose={changeFailModalShow}>
            <Box className="modal-box">
              <h1 className="hurrayStyle">Ooopss!</h1>
              <h2 className="yourScoreStyle">Your score is {score}/10</h2>
              <img className="gifFailStyle" src={OhNo} />
            </Box>
          </Modal>
        )}
        {showTimeout && (
          <Modal open={showTimeout} onClose={changeTimeoutShow}>
            <Box className="modal-box">
              <h1 className="hurrayStyle">Oopsss!</h1>
              <img className="gifStyle" src={TimesUp} />
            </Box>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Test;
