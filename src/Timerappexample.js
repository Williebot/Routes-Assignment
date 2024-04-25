import React, { useState, useRef, useEffect } from 'react';

const TimerAppExample = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    setIsActive(false);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setTimer(0);
  };

  // Clean up the interval on unmount
  useEffect(() => {
    return () => clearInterval(countRef.current);
  }, []);

  return (
    <div className="timer-app">
      <h2>Simple Timer</h2>
      <div className="timer">{timer} seconds</div>
      <div className="controls">
        {!isActive && <button onClick={handleStart}>Start</button>}
        {isActive && <button onClick={handleStop}>Stop</button>}
        <button onClick={handleReset} disabled={timer === 0}>Reset</button>
      </div>
    </div>
  );
};

export default TimerAppExample;
