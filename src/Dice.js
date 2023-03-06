import React, { useState } from 'react'
// import ReactDice from 'react-dice-complete'
// import 'react-dice-complete/dist/react-dice-complete.css'
import './Dice.css'

const Dice = () => {

    // const rollAll = () => {
    //     reactDice.rollAll()
    // }
    
    // const rollDoneCallback = (num) => {
    //     console.log('You rolled a ',num)
    // }

    // const elDice = document.getElementById("dice1")
    const [myNum, setMyNum] = useState(1);
    const rollDice = () => {
        // console.log("elDice", elDice.classList)
        var dice = Math.floor((Math.random()*6) + 1);
        console.log("dice...",dice)
        setMyNum(dice)
        // console.log("myNum",myNum)

        // for(let i=1; i<=6; i++){
        //     elDice.classList.remove('show-'+i)
        //     if(dice === i){
        //         elDice.classList.add('show-'+i)
        //     }
        // }
        // setTimeout(rollDice(), 1000)
    }

    return (
        // <div>
        //  <ReactDice
        //   numDice={1}
        //   rollDone={rollDoneCallback}
        //   disableIndividual={true}
        //   ref={dice => reactDice = dice}
        // />
        // <button onClick={rollAll}>Roll</button>
        // </div>

        <div className='game'>
            <div className='container'>
                <div id='dice1' className={`dice dice-one show-${myNum}`}>
                    <div id='dice-one-side-one' className='side one'>
                        <div className='dot one-1'></div>
                    </div>
                    <div id='dice-one-side-two' className='side two'>
                        <div className='dot two-1'></div>
                        <div className='dot two-2'></div>
                    </div>
                    <div id='dice-one-side-three' className='side three'>
                        <div className='dot three-1'></div>
                        <div className='dot three-2'></div>
                        <div className='dot three-3'></div>
                    </div>
                    <div id='dice-one-side-four' className='side four'>
                        <div className='dot four-1'></div>
                        <div className='dot four-2'></div>
                        <div className='dot four-3'></div>
                        <div className='dot four-4'></div>
                    </div>
                    <div id='dice-one-side-five' className='side five'>
                        <div className='dot five-1'></div>
                        <div className='dot five-2'></div>
                        <div className='dot five-3'></div>
                        <div className='dot five-4'></div>
                        <div className='dot five-5'></div>
                    </div>
                    <div id='dice-one-side-six' className='side six'>
                        <div className='dot six-1'></div>
                        <div className='dot six-2'></div>
                        <div className='dot six-3'></div>
                        <div className='dot six-4'></div>
                        <div className='dot six-5'></div>
                        <div className='dot six-6'></div>
                    </div>
                </div>
            </div>
            <div id='roll' className='rollButton'><button onClick={rollDice}>Roll Dice</button></div>
        </div>
    );
}

export default Dice