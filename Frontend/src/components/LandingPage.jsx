import React, { useState } from "react";
import NavBar from "./NavBar";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const [listTask, setListTask] = useState([]);
  const [timer, setTimer] = useState(0);

  const handleAddButton = () => {
    const input = document.querySelector('input');
    const text = input.value;

    if (text.trim() !== '') {

      const formatTime = (time) => {
        const hours = Math.floor(time / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      };

      const currentTime = formatTime(timer);
      const newTask = { text, time: currentTime };
      setListTask(prevList => [...prevList, newTask]);
      input.value = '';
    }
  }

  return (
    <div className="h-screen">
      <NavBar />

      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center">
          <div className="rounded-4xl flex justify-center items-center h-[100px] mt-[40px]">
            <h1 className="text text-white text-4xl">
              What do you want to Learn Today?
            </h1>
          </div>
        </div>

        <div className="flex items-center">
          <input className="h-[40px] w-[320px] rounded-l-lg pl-2 font-semibold font-mono text-lg" />
          <button className="h-[40px] w-[80px] rounded-r-lg bg-gray-500 text-lg text-white font-mono" onClick={handleAddButton}>
            Add
          </button>
        </div>

        <div id="taskArea" className="overflow-y-auto h-[400px] w-[400px] space-y-2 border-[0.075rem] border-gray-100/10 mt-2" style={{ scrollbarWidth: "thin", scrollbarColor: "gray transparent" }}>
          {listTask.map((task, index) => (
            <button key={index} className="h-[40px] w-[398px] font-mono text-lg flex justify-between items-center text-white border-[0.075rem] border-gray-100/10">
              <span className="ml-4">{task.text}</span>
              <span className="mr-4">{task.time}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default LandingPage;
