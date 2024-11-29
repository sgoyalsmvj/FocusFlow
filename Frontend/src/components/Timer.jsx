import React, { useState, useEffect } from "react";

const Timer = ({ currentTask, isActive, isDone }) => {
  const [seconds, setSeconds] = useState(() => {
    const savedTask = JSON.parse(localStorage.getItem(currentTask));
    return savedTask && savedTask.seconds ? savedTask.seconds : 0;
  });

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds + 1;
          const savedTask = JSON.parse(localStorage.getItem(currentTask)) || {};
          savedTask.seconds = newSeconds;
          localStorage.setItem(currentTask, JSON.stringify(savedTask));
          return newSeconds;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, currentTask]);

  useEffect(() => {
    if (isDone) {
      const savedTask = JSON.parse(localStorage.getItem(currentTask)) || {};
      savedTask.isDone = true;
      localStorage.setItem(currentTask, JSON.stringify(savedTask));
    }
  }, [isDone, currentTask]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  if (isDone) {
    return (
      <div className="text-4xl font-bold font-mono">
        The task is completed in {formatTime(seconds)}
      </div>
    );
  }

  return <div className="text-4xl font-semibold">{formatTime(seconds)}</div>;
};

export default Timer;
