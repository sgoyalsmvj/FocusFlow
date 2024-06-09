import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const TimerNavbar = ({ currentTask }) => {
  const [isActive, setIsActive] = useState(() => {
    const savedTask = JSON.parse(localStorage.getItem(currentTask));
    return savedTask ? savedTask.isActive : false;
  });

  const [isDone, setIsDone] = useState(() => {
    const savedTask = JSON.parse(localStorage.getItem(currentTask));
    return savedTask ? savedTask.isDone : false;
  });

  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem(currentTask)) || {};
    savedTask.isActive = isActive;
    localStorage.setItem(currentTask, JSON.stringify(savedTask));
  }, [isActive, currentTask]);

  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem(currentTask)) || {};
    savedTask.isDone = isDone;
    localStorage.setItem(currentTask, JSON.stringify(savedTask));
  }, [isDone, currentTask]);

  const handleDone = () => {
    setIsActive(false);
    setIsDone(true);
  };

  return (
    <div className="flex justify-between items-center h-[10vh] text-white bg-gray-850 border-b-[0.075rem] border-b-gray-100/10">
      <div>
        {!isDone ? (
          isActive ? (
            <button
              className="shadow-lg font-mono rounded-lg ml-[30px] p-2 sm:w-[150px] w-[100px] bg-red-500 hover:bg-red-700 font-semibold"
              onClick={() => setIsActive(false)}
            >
              Pause
            </button>
          ) : (
            <button
              className="shadow-lg font-mono rounded-lg ml-[30px] sm:w-[150px] w-[100px] p-2 bg-green-500 hover:bg-green-700 font-semibold"
              onClick={() => setIsActive(true)}
            >
              Start
            </button>
          )
        ) : null}
      </div>

      <h1 className="text-white">
        <Timer currentTask={currentTask} isActive={isActive} isDone={isDone} />
      </h1>

      <div>
        {!isDone ? (
          <button
            className="shadow-lg font-mono rounded-lg mr-[30px] sm:w-[150px] w-[100px] p-2 bg-blue-500 hover:bg-blue-700 font-semibold"
            onClick={handleDone}
          >
            Task Done
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TimerNavbar;
