import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";

const LandingPage = () => {
  const [listTask, setListTask] = useState([]);
  const [taskName, setTaskName] = useState("");

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

  const handleAddButton = (ev) => {
    ev.preventDefault();
    if (taskName.trim() !== "") {
      axios
        .post("/student/addnewtask", { name: taskName })
        .then((res) => {
          const newTask = res.data.task;
          setListTask((prev) => [...prev, newTask]);
          setTaskName("");
        })
        .catch((err) => {
          console.error("Error adding task:", err);
        });
    }
  };

  const handleDeleteTask = (id) => {
    axios
      .delete(`/student/deleteTask/${id}`)
      .then(() => {
        setListTask((prev) => prev.filter((task) => task._id !== id));
      })
      .catch((err) => {
        console.error("Error deleting task:", err);
      });
  };

  useEffect(() => {
    axios
      .get("/student/gettasks")
      .then((res) => {
        const tasks = res.data.list.map((task) => ({
          ...task,
          timer: task.timer || 0, // Ensure each task has a timer property
        }));
        setListTask(tasks);
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
      });
  }, []);

  return (
    <div className="h-screen">
      <NavBar />

      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center rounded-4xl flex justify-center items-center h-[100px] mt-[40px]">
          <h1 className="text text-white text-4xl">
            What do you want to Learn Today?
          </h1>
        </div>

        <div className="flex items-center mt-7">
          <input
            className="h-[40px] w-[320px] rounded-l-lg pl-2 font-mono text-black text-lg"
            value={taskName}
            onChange={(ev) => setTaskName(ev.target.value)}
          />
          <button
            className="h-[40px] w-[80px] rounded-r-lg bg-gray-500 text-lg text-white font-mono"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>

        <div
          id="taskArea"
          className="overflow-y-auto h-max w-[500px] space-y-2 border-[0.075rem] border-gray-100/10 mt-4 p-1"
          style={{ scrollbarWidth: "thin", scrollbarColor: "gray transparent" }}
        >
          {listTask.map((task, index) => (
            <div
              key={index}
              className="rounded-md cursor-default h-[40px] w-full font-mono text-lg flex justify-between items-center text-white border-[0.075rem] border-gray-100/10"
            >
              <Link
                to={`/student/videoBrowse/${encodeURIComponent(task.name)}/${
                  task._id
                }`}
              >
                <span
                  className={` ${
                    task.status === "pending"
                      ? "text-red-400"
                      : "text-green-500"
                  } ml-4`}
                >
                  {task.name}
                </span>
              </Link>

              <div className="flex justify-center items-center">
                <span className="mr-2">{formatTime(task.timer)}</span>
                <button
                  onClick={() => handleDeleteTask(task._id)}
                  className="m-4 bg-gray-600 p-1 rounded-full"
                >
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
