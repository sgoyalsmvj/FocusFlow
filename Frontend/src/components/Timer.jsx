import React, { useState, useEffect, useCallback } from 'react';

const Timer = ({ isActive, isDone }) => {
  const [seconds, setSeconds] = useState(() => {
    const savedSeconds = localStorage.getItem('timerSeconds');
    return savedSeconds ? JSON.parse(savedSeconds) : 0;
  });

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds + 1;
          localStorage.setItem('timerSeconds', JSON.stringify(newSeconds));
          return newSeconds;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  useEffect(() => {
    if (isDone) {
      localStorage.removeItem('timerSeconds');
    }
  }, [isDone]);

  const formatTime = useCallback((timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const pad = (value) => {
      return value < 10 ? '0' + value : value;
    };

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }, []);

  if (isDone) {
    return (
      <div className='text-4xl font-bold font-mono'>
        The task is completed in {formatTime(seconds)}
      </div>
    );
  }

  return <div className='text-4xl font-semibold'>{formatTime(seconds)}</div>;
};

export default Timer;
