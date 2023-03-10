import React from "react";
import "../Styles/learn.css";
import lionImg from "../Images/animals/lion.png";
import horseImg from "../Images/animals/horse.png";
import dogImg from "../Images/animals/dog.png";
import catImg from "../Images/animals/cat.png";
import cowImg from "../Images/animals/cow.png";
import elephantImg from "../Images/animals/elephant.png";
import sheepImg from "../Images/animals/sheep.png";
import frogImg from "../Images/animals/frog.png";

const Learn = (props) => {
  console.log("myCategory   ", props);
  let lionAudio = new Audio("/lion-roar-6011.mp3");
  const playLion = () => {
    lionAudio.play();
  };

  let dogAudio = new Audio("/dog_barking-6296.mp3");
  const playDog = () => {
    dogAudio.play();
  };
  return (
    <div className="mainCat">
      <div className="wrapCat">
        {props.category === "idAnimalCard" && (
          <div className="animalCardsWrap">
            <div className="specificCategoryCards lionCard" onClick={playLion}>
              <img className="animalImg" src={lionImg} alt=""></img>
            </div>
            <div className="specificCategoryCards horseCard">
              <img className="animalImg" src={horseImg} alt=""></img>
            </div>
            <div className="specificCategoryCards dogCard" onClick={playDog}>
              <img className="animalImg" src={dogImg} alt=""></img>
            </div>
            <div className="specificCategoryCards catCard">
              <img className="animalImg" src={catImg} alt=""></img>
            </div>
            <div className="specificCategoryCards cowCard">
              <img className="animalImg" src={cowImg} alt=""></img>
            </div>
            <div className="specificCategoryCards elephantCard">
              <img className="animalImg" src={elephantImg} alt=""></img>
            </div>
            <div className="specificCategoryCards frogCard">
              <img className="animalImg" src={frogImg} alt=""></img>
            </div>
            <div className="specificCategoryCards sheepCard">
              <img className="animalImg" src={sheepImg} alt=""></img>
            </div>
          </div>
        )}

        {props.category === "idBirdCard" && (
          <div className="birdCardsWrap">
            <div className="specificCategoryCards cowCard">
              <img className="animalImg" alt=""></img>
            </div>
            <div className="specificCategoryCards elephantCard">
              <img className="animalImg" alt=""></img>
            </div>
            <div className="specificCategoryCards frogCard">
              <img className="animalImg" alt=""></img>
            </div>
            <div className="specificCategoryCards sheepCard">
              <img className="animalImg" alt=""></img>
            </div>
          </div>
        )}

        {props.category === "idGeneralCard" && (
          <div className="generalCardWrap">
            <div className="specificCategoryCards cowCard">
              <img className="animalImg" alt=""></img>
            </div>
            <div className="specificCategoryCards elephantCard">
              <img className="animalImg" alt=""></img>
            </div>
            <div className="specificCategoryCards frogCard">
              <img className="animalImg" alt=""></img>
            </div>
            <div className="specificCategoryCards sheepCard">
              <img className="animalImg" alt=""></img>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
