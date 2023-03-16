import React from "react";
import { useState } from "react";
import "../Styles/learningCategories.css";
import Navbar from "../Navbar";
import Back from "../back";
import animalCat from "../Images/animal_category.png";
import birdCat from "../Images/bird_category.png";
import generalCat from "../Images/general_category.png";
import Learn from "./learn";

const LearningCategories = () => {
  const [showCategories, setShowCategories] = useState(true);
  const [categoryName, setCategoryName] = useState("idAnimalCard");

  let categoryId;
  const handleCategory = (e) => {
    console.log("e.currentTarget.id ---> ", e.currentTarget.id);
    categoryId = e.currentTarget.id;
    setCategoryName(categoryId);
    console.log("categoryId ---> ", categoryId);
    setShowCategories(false);
  };
  const updateShowCategories = () => {
    setShowCategories(true);
  };

  return (
    <div className="mainWrapper">
      <Navbar />
      {!showCategories && <Back updateShowCategories={updateShowCategories} />}
      <div className="selectCategorywrap">
        {showCategories && (
          <div className="wrap">
            <h3>Select Category</h3>
            <div className="cardsWrapper">
              <div
                id="idAnimalCard"
                className="cards animalCard"
                onClick={handleCategory}
              >
                <img className="categoryImg" src={animalCat} alt=""></img>
              </div>

              <div
                id="idBirdCard"
                className="cards birdCard"
                onClick={handleCategory}
              >
                <img className="categoryImg" src={birdCat} alt=""></img>
              </div>

              <div
                id="idGeneralCard"
                className="cards generalCard"
                onClick={handleCategory}
              >
                <img className="categoryImg" src={generalCat} alt=""></img>
              </div>

              <div className="animals">
                <h3>Animals</h3>
              </div>

              <div className="birds">
                <h3>Birds</h3>
              </div>

              <div className="general">
                <h3>General</h3>
              </div>
            </div>
          </div>
        )}
        {!showCategories && <Learn category={categoryName} />}
      </div>
    </div>
  );
};

export default LearningCategories;
