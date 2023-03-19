import React from "react";
import "../Styles/learn.css";
import myData from "../myData.json";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

const Learn = (props) => {
  let animalArray = [];
  let birdArray = [];
  let generalArray = [];
  myData.forEach((item) => {
    if (props.category === "idAnimalCard" && item.category === "Animals") {
      animalArray.push(item);
    } else if (props.category === "idBirdCard" && item.category === "Birds") {
      birdArray.push(item);
    } else if (
      props.category === "idGeneralCard" &&
      item.category === "General"
    ) {
      generalArray.push(item);
    }
  });

  const playSoundAnimal = (e) => {
    const clickedId = e.currentTarget.id;
    let mySoundTrack;
    animalArray.forEach((item) => {
      if (clickedId === item.name) {
        mySoundTrack = item.sound;
      }
    });
    let soundToPlay = new Audio(mySoundTrack);
    soundToPlay.play();
  };

  const playSoundBird = (e) => {
    const clickedId = e.currentTarget.id;
    let mySoundTrack;
    birdArray.forEach((item) => {
      if (clickedId === item.name) {
        mySoundTrack = item.sound;
      }
    });
    let soundToPlay = new Audio(mySoundTrack);
    soundToPlay.play();
  };

  const playSoundGeneral = (e) => {
    const clickedId = e.currentTarget.id;
    let mySoundTrack;
    generalArray.forEach((item) => {
      if (clickedId === item.name) {
        mySoundTrack = item.sound;
      }
    });
    let soundToPlay = new Audio(mySoundTrack);
    soundToPlay.play();
  };

  const pronunciationHandler = (e) => {
    const clickedPronunciation = e.currentTarget.id;
    let myPronunciation;
    myData.forEach((pro) => {
      if (clickedPronunciation === pro.name) {
        myPronunciation = pro.pronunciation;
      }
    });
    let pronunciationToPlay = new Audio(myPronunciation);
    pronunciationToPlay.play();
  };
  const slowSpeedHandler = (e) => {
    const clickedSlowSound = e.currentTarget.id;
    let mySlowSound;
    myData.forEach((sound) => {
      if (clickedSlowSound === sound.name) {
        mySlowSound = sound.pronunciation;
      }
    });
    let slowSound = new Audio(mySlowSound);
    slowSound.playbackRate = 0.5;
    slowSound.play();
  };

  return (
    <div className="mainCat" data-testid="learn">
      <div className="wrapCat">
        {animalArray.length > 0 && (
          <div className="animalCardsWrap">
            {animalArray.map((animal, index) => (
              <div key={index} className="wrapCardSound">
                <div
                  id={animal.name}
                  className="specificCategoryCards"
                  onClick={playSoundAnimal}
                >
                  <img
                    className="imagesStyle"
                    src={animalArray[index].image}
                    alt=""
                  ></img>
                </div>
                <div className="buttonsContainer">
                  <button
                    id={animal.name}
                    className="pronunciationButton"
                    onClick={pronunciationHandler}
                  >
                    <VolumeUpIcon style={{ fontSize: 29, color: "#fff" }} />
                  </button>
                  <button
                    id={animal.name}
                    className="slowButton"
                    onClick={slowSpeedHandler}
                  >
                    <SlowMotionVideoIcon
                      style={{ fontSize: 29, color: "#fff" }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {birdArray.length > 0 && (
          <div className="animalCardsWrap">
            {birdArray.map((bird, index) => (
              <div key={index} className="wrapCardSound">
                <div
                  id={bird.name}
                  key={index}
                  className="specificCategoryCards"
                  onClick={playSoundBird}
                >
                  <img
                    className="imagesStyle"
                    src={birdArray[index].image}
                    alt=""
                  ></img>
                </div>
                <div className="buttonsContainer">
                  <button
                    id={bird.name}
                    className="pronunciationButton"
                    onClick={pronunciationHandler}
                  >
                    <VolumeUpIcon style={{ fontSize: 29, color: "#fff" }} />
                  </button>
                  <button
                    id={bird.name}
                    className="slowButton"
                    onClick={slowSpeedHandler}
                  >
                    <SlowMotionVideoIcon
                      style={{ fontSize: 29, color: "#fff" }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {generalArray.length > 0 && (
          <div className="animalCardsWrap">
            {generalArray.map((general, index) => (
              <div key={index} className="wrapCardSound">
                <div
                  id={general.name}
                  key={index}
                  className="specificCategoryCards"
                  onClick={playSoundGeneral}
                >
                  <img
                    className="imagesStyle"
                    data-testid="imageCheck"
                    src={generalArray[index].image}
                    alt=""
                  ></img>
                </div>
                <div className="buttonsContainer">
                  <button
                    id={general.name}
                    className="pronunciationButton"
                    onClick={pronunciationHandler}
                  >
                    <VolumeUpIcon
                      style={{
                        position: "relative",
                        fontSize: 29,
                        color: "#fff",
                      }}
                    />
                  </button>
                  <button
                    id={general.name}
                    className="slowButton"
                    onClick={slowSpeedHandler}
                  >
                    <SlowMotionVideoIcon
                      style={{
                        position: "relative",
                        fontSize: 29,
                        color: "#fff",
                      }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
