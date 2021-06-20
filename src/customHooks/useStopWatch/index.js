import { useState, useRef } from "react";

export const UseStopWatch = (initialValue = 0, interval = 10) => {
  console.log("initialValue", initialValue);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [timer, setTimer] = useState(initialValue);
  const timerRef = useRef();

  const startClock = () => {
    setStart(true);
    setPause(true);
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, interval);
  };

  const pauseClock = () => {
    clearInterval(timerRef.current);
    setPause(false);
  };

  const resumeClock = () => {
    setPause(true);
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, interval);
  };

  const resetClock = () => {
    clearInterval(timerRef.current);
    setStart(0);
    setPause(0);
    setTimer(0);
  };

  return {
    startClock,
    pauseClock,
    resumeClock,
    resetClock,
    start,
    pause,
    timer,
  };
};
