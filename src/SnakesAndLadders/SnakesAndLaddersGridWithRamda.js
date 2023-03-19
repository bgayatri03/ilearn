import React from "react";
import * as R from "ramda";
import "../Styles/SnakesAndLaddersGridWithRamda.css";

const SnakesAndLaddersGridWithRamda = (props) => {
  const myPosition = props.myPosition;
  return R.pipe(
    R.splitEvery(10),
    R.addIndex(R.map)((row, index) => {
      return (
        <div className="box-row" key={index} data-testid="box-row">
          {R.map((box) => {
            return (
              <div key={box} className="box">
                <span>
                  <div className="each-box">
                    <div className="icons-in-box">
                      {myPosition === box && (
                        <div
                          className="game-token"
                          data-testid="game-token"
                          id={myPosition}
                        />
                      )}
                    </div>
                    <div style={{ fontSize: "10px", opacity: 0 }}>{box}</div>
                  </div>
                </span>
              </div>
            );
          }, row)}
        </div>
      );
    })
  )(R.range(1, 101));
};

export default SnakesAndLaddersGridWithRamda;
