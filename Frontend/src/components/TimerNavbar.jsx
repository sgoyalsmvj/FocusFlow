import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const TimerNavbar = () => {
  console.log("render");

  const [isActive, setisActive] = useState(false);
  const [isDone, setDone] = useState(false);

  const handleDone = () => {
    setisActive(false);
    setDone(true);
  };

  return (
    <div className={`flex justify-${isDone ? 'between' : 'center'} items-center h-130 text-white`}>

      {(!isDone) ? (
        isActive ? (
          <button
            className="shadow-lg rounded-lg  ml-[30px] p-2 w-[150px] bg-red-500  hover:bg-red-700"
            onClick={() => setisActive(false)}
          >
            Pause
          </button>
        ) : (
          <button
            className="shadow-lg rounded-lg ml-[30px] w-[150px] p-2 bg-green-500  hover:bg-green-700"
            onClick={() => setisActive(true)}
          >
            Start
          </button>
        )
      ) : null}
       
       
     
        <Timer isActive={isActive} isDone={isDone} />
      

      {(!isDone) ? (
        <button
          className="shadow-lg rounded-lg mr-[30px] w-[150px] p-2 bg-blue-500  hover:bg-blue-700"
          onClick={handleDone}
        >
          Task Done{" "}
        </button>
      ) :null}
    </div>
  );
};

export default TimerNavbar;
