import React from 'react';
import '../Styles/homePage.css';
import Navbar from '../Navbar';
// import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const playGame = () => {
        window.location.pathname = '/snakesAndLaddersGame';
    }
    const learn = () => {
        window.location.pathname = '/learnCategories';
    }

    return (  
        <div className='container'> 
            <Navbar/>
        <div className="cardWrapper">
            <div className="col-md-3">
                <div className="card card-1" onClick={learn}>
                    <h3> Learn </h3>
                </div>
            </div>
                
            <div className="col-md-3">
                <div className="card card-2" onClick={playGame}>
                    <h3> Play </h3>
                </div>
            </div>
                
            <div className="col-md-3">
                <div className="card card-3">
                    <h3> Test </h3>
                </div>
            </div>
                
            <div className="col-md-3">
                <div className="card card-4">
                    <h3> Dashboard </h3>
                </div>
            </div>
        </div>    
      </div>
  )
}

export default HomePage;
