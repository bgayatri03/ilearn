import React from 'react';
import '../Styles/homePage.css';
import Navbar from '../Navbar';
import learnImg from '../Images/Learn.png';
import gameImg from '../Images/Play.png';
import testImg from '../Images/Test.png';
import dashboardImg from '../Images/Dashboard.png';

const HomePage = () => {
    const playGame = () => {
        window.location.pathname = '/snakesAndLaddersGame';
    }
    const learn = () => {
        window.location.pathname = '/learningCategories';
    }

    return (  
        <div className='container'> 
            <Navbar/>
        <div className="cardWrapper">
            <div className="col-md-3">
                <div className="card card-1" onClick={learn}>
                    <img className='featureImg' src={learnImg} alt=''></img>    
                    <h3> Learn </h3>
                </div>
            </div>
                
            <div className="col-md-3">
                <div className="card card-2" onClick={playGame}>
                    <img className='featureImg' src={gameImg} alt=''></img>    
                    <h3> Play </h3>
                </div>
            </div>
                
            <div className="col-md-3">
                <div className="card card-3">
                    <img className='featureImg' src={testImg} alt=''></img>    
                    <h3> Test </h3>
                </div>
            </div>
                
            <div className="col-md-3">
                <div className="card card-4">
                    <img className='featureImg' src={dashboardImg} alt=''></img>    
                    <h3> Dashboard </h3>
                </div>
            </div>
        </div>    
      </div>
  )
}

export default HomePage;
