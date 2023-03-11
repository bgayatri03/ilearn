import React from "react";
import '../Styles/SnakesAndLaddersGrid.css'
import GameBoard from '../Images/new snake ladder.jpg';

const SnakesAndLaddersGrid = () => {
    const p = 10;
    const s = 10;
    return (
        <div className="gridBoardImageCont">
            <div className="gridBoard">
                {[...Array(p)].map((e, i) => <div className="gridRow" key={i}>
                    {[...Array(s)].map((e, j) => <div id={`block`+i+j} className="gridBlock" key={j}></div>)}
                </div>)}
            </div>
            <img id="gameBoardImage" className="shadow" src={GameBoard} alt=""></img>
        </div>

    )
}

export default SnakesAndLaddersGrid