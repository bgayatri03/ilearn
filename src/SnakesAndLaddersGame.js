import React, { useState } from "react";
import './Styles/SnakesAndLaddersGame.css'
// import SnakesAndLaddersGrid from './SnakesAndLadders/SnakesAndLaddersGrid'
import SnakesAndLaddersGridWithRamda from './SnakesAndLadders/SnakesAndLaddersGridWithRamda'
import SnakeLadderBoardImage from './Images/SnakeLadders540-540.jpg'
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system"

const SnakesAndLadders = props => {
    const myPosition = props.currentPlace
    const modalState = props.modalState
    const checkboxesValues = props.checkBoxValues
    console.log("myPosition...",myPosition)
    console.log("modalState...",modalState)
    console.log("checkboxesValues...",checkboxesValues)
    const [myNum, setMyNum] = useState(0);
    let audio = new Audio("/DiceRollingSound.mp3")

    const rollDice = () => {
        audio.play()
        var dice = Math.floor((Math.random() * 6) + 1);
        console.log("dice...", dice)
        setMyNum(dice)
        changeTokenPosition(dice)
    }

    const changeTokenPosition = (dice) => {
        console.log("dice in change", dice)
        if(myPosition + dice >= 100){
            alert('Game Over!')
        }
        else{
            props.changePosition(myPosition + dice)
            // alert('Changed!')
        }
    }
    return (
        <div className="mainDiv">
            <div className="diceAndBoardContainer">
                <div className="diceContainer">
                    <div id='dice1' className={`diceStyle dice-style-one  showSide-${myNum}`}>
                        <div id='dice-one-side-one' className='diceSide one'>
                            <div className='dots one-1'></div>
                        </div>
                        <div id='dice-one-side-two' className='diceSide two'>
                            <div className='dots two-1'></div>
                            <div className='dots two-2'></div>
                        </div>
                        <div id='dice-one-side-three' className='diceSide three'>
                            <div className='dots three-1'></div>
                            <div className='dots three-2'></div>
                            <div className='dots three-3'></div>
                        </div>
                        <div id='dice-one-side-four' className='diceSide four'>
                            <div className='dots four-1'></div>
                            <div className='dots four-2'></div>
                            <div className='dots four-3'></div>
                            <div className='dots four-4'></div>
                        </div>
                        <div id='dice-one-side-five' className='diceSide five'>
                            <div className='dots five-1'></div>
                            <div className='dots five-2'></div>
                            <div className='dots five-3'></div>
                            <div className='dots five-4'></div>
                            <div className='dots five-5'></div>
                        </div>
                        <div id='dice-one-side-six' className='diceSide six'>
                            <div className='dots six-1'></div>
                            <div className='dots six-2'></div>
                            <div className='dots six-3'></div>
                            <div className='dots six-4'></div>
                            <div className='dots six-5'></div>
                            <div className='dots six-6'></div>
                        </div>
                    </div>
                    <button id="rollButton" onClick={rollDice}>Roll Dice</button>
                </div>

                <div className="board boardImage">
                <SnakesAndLaddersGridWithRamda myPosition={myPosition}/>
                </div>
                {/* <img id="gameBoardImage" className="shadow" src={SnakeLadderBoardImage} alt=""></img> */}



                {modalState && 
                    <Modal open={modalState} onClose={props.changeModalState}>
                        <Box className="modal-box">
                            <Typography>It's a modal</Typography>
                        </Box>
                    </Modal>
                }
            </div>
        </div>
    );
}

export default SnakesAndLadders