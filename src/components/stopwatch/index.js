import React from "react";
import { UseStopWatch } from "../../customHooks/useStopWatch";
import "./styles.css";

export const StopWatch = ({ initial, interval }) => {
  const {
    startClock,
    pauseClock,
    resumeClock,
    resetClock,
    start,
    pause,
    timer,
  } = UseStopWatch(Number(initial), Number(interval));

  const sanitizeTime = (duration) => {
    const milliSeconds = parseInt(duration % 100);
    let seconds = parseInt((duration / 100) % 60);
    let minutes = parseInt((duration / (100 * 60)) % 60);

    //uncomment this code to set reset clock at 1.30

    // if (seconds === 1 && milliSeconds === 30) {
    //   resetClock();
    // }

    return minutes + ":" + seconds + ":" + milliSeconds;
  };

  return (
    <div className="stop__watch__container">
      <div className="stop_watch_wrapper">
        <div className="stopwatch">
          <p>{sanitizeTime(timer)}</p>
        </div>
        <div className="buttons">
          {!start && !pause ? (
            <button onClick={() => startClock()}>Start</button>
          ) : pause ? (
            <button onClick={() => pauseClock()}>Pause</button>
          ) : (
            <button onClick={() => resumeClock()}>Resume</button>
          )}
          <button onClick={resetClock}>Reset</button>
        </div>
      </div>
    </div>
  );
};
