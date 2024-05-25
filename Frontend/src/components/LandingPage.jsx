import React from "react";
import NavBar from "./NavBar";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const listTask = [];

  const handleAddButton = () => {
    const input = document.querySelector('input');
    const text = input.value;

    if (text.trim() !== '') {
      listTask.push(text);
      const taskArea = document.getElementById('taskArea');
      const task = document.createElement('button');
      task.className = 'h-[40px] w-[400px] font-mono text-lg flex justify-center items-center text-white border-[0.075rem] border-gray-100/10';
      task.innerHTML = text;
      taskArea.appendChild(task);
      input.value = '';
    }
  }

//   console.log("Render Landing Page");

  // listTask.push("Task 1");
  // listTask.push("Task 2");
  // listTask.push("Task 3");

  return (
     <div className="h-screen" >
          
      <NavBar/>

      <div className="flex flex-col items-center">

        <div className="flex justify-center items-center"><div className=" rounded-4xl flex justify-center items-center h-[100px] mt-[40px] "><h1 className="text text-white text-4xl">What do you want to Learn Today?</h1></div></div>

        <div className="flex items-center">
          <input className="h-[40px] w-[320px] rounded-l-lg "/>
          <button className="h-[40px] w-[80px] rounded-r-lg bg-gray-500 text-lg text-white font-mono" onClick={handleAddButton}>Add</button>
        </div>

        <div id="taskArea" className="h-[400px] w-[400px] flex flex-col space-y-2 border-[0.075rem] border-gray-100/10 mt-2">          
          
        </div>

      </div>

    
     </div>

  );
};

export default LandingPage;
