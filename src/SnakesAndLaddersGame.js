import React, { useState } from "react";
import './Styles/SnakesAndLaddersGame.css'

const SnakesAndLadders = () => {
    const [myNum, setMyNum] = useState(1);
    let audio = new Audio("/DiceRollingSound.mp3")

    const rollDice = () => {
        // console.log("elDice", elDice.classList)
        audio.play()
        var dice = Math.floor((Math.random() * 6) + 1);
        console.log("dice...", dice)
        setMyNum(dice)
    }
    return (
        <div className="mainDiv">
            <div className="snakesAndLaddersTitleContainer"></div>
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
                <div className="boardContainer">
                    <div class="box" id="b100">


                    </div>
                    <div class="box" id="b99">

                    </div>
                    <div class="box" id="b98">

                    </div>
                    <div class="box" id="b97">

                    </div>
                    <div class="box" id="b96">

                    </div>
                    <div class="box" id="b95">

                    </div>
                    <div class="box" id="b94">

                    </div>
                    <div class="box" id="b93">

                    </div>
                    <div class="box" id="b92">

                    </div>
                    <div class="box" id="b91">

                    </div>
                    <div class="box" id="b81">

                    </div>
                    <div class="box" id="b82">

                    </div>
                    <div class="box" id="b83">

                    </div>
                    <div class="box" id="b84">

                    </div>
                    <div class="box" id="b85">

                    </div>
                    <div class="box" id="b86">

                    </div>
                    <div class="box" id="b87">

                    </div>
                    <div class="box" id="b88">

                    </div>
                    <div class="box" id="b89">

                    </div>
                    <div class="box" id="b90">

                    </div>
                    <div class="box" id="b80">

                    </div>
                    <div class="box" id="b79">

                    </div>
                    <div class="box" id="b78">

                    </div>
                    <div class="box" id="b77">

                    </div>
                    <div class="box" id="b76">

                    </div>
                    <div class="box" id="b75">

                    </div>
                    <div class="box" id="b74">

                    </div>
                    <div class="box" id="b73">

                    </div>
                    <div class="box" id="b72">

                    </div>
                    <div class="box" id="b71">

                    </div>
                    <div class="box" id="b61">

                    </div>
                    <div class="box" id="b62">

                    </div>
                    <div class="box" id="b63">

                    </div>
                    <div class="box" id="b64">

                    </div>
                    <div class="box" id="b65">

                    </div>
                    <div class="box" id="b66">

                    </div>
                    <div class="box" id="b67">

                    </div>
                    <div class="box" id="b68">

                    </div>
                    <div class="box" id="b69">

                    </div>
                    <div class="box" id="b70">

                    </div>
                    <div class="box" id="b60">

                    </div>
                    <div class="box" id="b59">

                    </div>
                    <div class="box" id="b58">

                    </div>
                    <div class="box" id="b57">

                    </div>
                    <div class="box" id="b56">

                    </div>
                    <div class="box" id="b55">

                    </div>
                    <div class="box" id="b54">

                    </div>
                    <div class="box" id="b53">

                    </div>
                    <div class="box" id="b52">

                    </div>
                    <div class="box" id="b51">

                    </div>
                    <div class="box" id="b41">

                    </div>
                    <div class="box" id="b42">

                    </div>
                    <div class="box" id="b43">

                    </div>
                    <div class="box" id="b44">

                    </div>
                    <div class="box" id="b45">

                    </div>
                    <div class="box" id="b46">

                    </div>
                    <div class="box" id="b47">

                    </div>
                    <div class="box" id="b48">

                    </div>
                    <div class="box" id="b49">

                    </div>
                    <div class="box" id="b50">

                    </div>
                    <div class="box" id="b40">

                    </div>
                    <div class="box" id="b39">

                    </div>
                    <div class="box" id="b38">

                    </div>
                    <div class="box" id="b37">

                    </div>
                    <div class="box" id="b36">

                    </div>
                    <div class="box" id="b35">

                    </div>
                    <div class="box" id="b34">

                    </div>
                    <div class="box" id="b33">

                    </div>
                    <div class="box" id="b32">

                    </div>
                    <div class="box" id="b31">

                    </div>
                    <div class="box" id="b21">

                    </div>
                    <div class="box" id="b22">

                    </div>
                    <div class="box" id="b23">

                    </div>
                    <div class="box" id="b24">

                    </div>
                    <div class="box" id="b25">

                    </div>
                    <div class="box" id="b26">

                    </div>
                    <div class="box" id="b27">

                    </div>
                    <div class="box" id="b28">

                    </div>
                    <div class="box" id="b29">

                    </div>
                    <div class="box" id="b30">

                    </div>
                    <div class="box" id="b20">

                    </div>
                    <div class="box" id="b19">

                    </div>
                    <div class="box" id="b18">

                    </div>
                    <div class="box" id="b17">

                    </div>
                    <div class="box" id="b16">

                    </div>
                    <div class="box" id="b15">

                    </div>
                    <div class="box" id="b14">

                    </div>
                    <div class="box" id="b13">

                    </div>
                    <div class="box" id="b12">

                    </div>
                    <div class="box" id="b11">

                    </div>
                    <div class="box" id="b01">

                        <p id="p1"></p>
                        <p id="p2"></p>

                    </div>
                    <div class="box" id="b02">

                    </div>
                    <div class="box" id="b03">

                    </div>
                    <div class="box" id="b04">

                    </div>
                    <div class="box" id="b05">

                    </div>
                    <div class="box" id="b06">

                    </div>
                    <div class="box" id="b07">

                    </div>
                    <div class="box" id="b08">

                    </div>
                    <div class="box" id="b09">

                    </div>
                    <div class="box" id="b10">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SnakesAndLadders