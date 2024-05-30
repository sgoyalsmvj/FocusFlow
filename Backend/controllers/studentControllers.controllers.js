import Student from "../models/student.models.js";
import Task from "../models/task.models.js";
import Video from "../models/video.models.js";

export const addNewTask = async (req, res) => {
  const { name, student } = req.body;
  try {
    const task = await Task.create({ name, timer: 0, status: "pending" });
    await task.save();
    const curstudent = await Student.findById(student._id);
    curstudent.Tasks.push(task._id);
    await curstudent.save();
    res.status(201).json({ message: "task added successfully" });
  } catch (error) {
    res.status(404).json({ message: "not able to add the task" });
  }
};

export const getTasks = async (req, res) => {
  const { student } = req.body;
  console.log(student);
  try {
    const curstudent = await Student.findById(student._id);
    const tasks = curstudent.Tasks;
    const list = [];

    for (let i = 0; i < tasks.length; i++) {
      const task = await Task.findById(tasks[i]);
      const time = new Date();

      if (
        task.createdAt.getDate() == time.getDate() &&
        task.createdAt.getMonth() == time.getMonth() &&
        task.createdAt.getFullYear() == time.getFullYear()
      ) {
        list.push(task);
      }
    }
    res.status(200).json({ list, message: "Task Successfully Fetched!!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;
  const { student } = req.body;
  console.log(id);
  try {
    const task = await Task.findByIdAndDelete(id);
    const curstudent = await Student.findById(student._id);
    const tasks = curstudent.Tasks;
    const index = tasks.indexOf(id);
    tasks.splice(index, 1);
    await curstudent.save();
    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "task not found" });
  }
};

export const getVideosRelatedToTask = async (req, res) => {
  const keywords = decodeURIComponent(req.params.keywords).split(" ");
  try {
    const videos = await Video.find({ tags: { $in: keywords } });
    // console.log(videos);
    res.status(200).json({ videos, message: "Videos successfully fetched!" });
  } catch (err) {
    res.status(404).json({ message: "Videos not found!" });
  }
};

export const getVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = Video.findById(id);
    res.status(200).json({ video, message: "Video successfully fetched!" });
  } catch (error) {
    res.status(404).json({ message: "video not found!" });
  }
};
