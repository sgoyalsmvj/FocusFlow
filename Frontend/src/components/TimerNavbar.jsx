import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const TimerNavbar = () => {
  const [isActive, setIsActive] = useState(
    JSON.parse(localStorage.getItem("isActive")) ?? true
  );
  const [isDone, setIsDone] = useState(
    JSON.parse(localStorage.getItem("isDone")) ?? false
  );

  useEffect(() => {
    localStorage.setItem("isActive", JSON.stringify(isActive));
  }, [isActive]);

  useEffect(() => {
    localStorage.setItem("isDone", JSON.stringify(isDone));
  }, [isDone]);

  const handleDone = () => {
    setIsActive(false);
    setIsDone(true);
  };

  return (
    <div className={`flex justify-between items-center h-[10vh] text-white bg-gray-850 border-b-[0.075rem] border-b-gray-100/10`}>
      <div>
        {!isDone ? (
          isActive ? (
            <button
              className="shadow-lg font-mono rounded-lg  ml-[30px] p-2 sm:w-[150px] w-[100px] bg-red-500  hover:bg-red-700 font-semibold"
              onClick={() => setIsActive(false)}
            >
              Pause
            </button>
          ) : (
            <button
              className="shadow-lg font-mono rounded-lg ml-[30px] sm:w-[150px] w-[100px] p-2 bg-green-500  hover:bg-green-700 font-semibold"
              onClick={() => setIsActive(true)}
            >
              Start
            </button>
          )
        ) : null}
      </div>

      <h1 className="text-white">
        <Timer isActive={isActive} isDone={isDone} />
      </h1>

      <div>
        {!isDone ? (
          <button
            className="shadow-lg font-mono rounded-lg mr-[30px] sm:w-[150px] w-[100px] p-2 bg-blue-500  hover:bg-blue-700 font-semibold"
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
