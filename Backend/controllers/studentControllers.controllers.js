import Student from "../models/student.models.js";
import Task from "../models/task.models.js";
import Video from "../models/video.models.js";

export const addNewTask = async (req, res) => {
  const { name, student } = req.body;
  try {
    const task = await Task.create({ name, timer: 0, status: "pending" });
    await task.save();
    const student = await Student.findById(student._id);
    await student.Tasks.push(task._id);
    res.status(201).json({ message: "task added successfully" });
  } catch (error) {
    res.status(404).json({ message: "not able to add the task" });
  }
};

export const getTasks = async (req, res) => {
  try {
    const student = await Student.findById(req.body.student._id);
    const task = student.Tasks;
    const list = [];

    for (let i = 0; i < task.length; i++) {
      const task = await Task.findById(task[i]);

      const current = Date.now();
      const time = task.createdAt;

      current.sethours(0, 0, 0, 0);
      time.sethours(0, 0, 0, 0);

      if (task.createdAt == Date.now()) {
        list.push(task.name);
      } else {
        await Task.findByIdAndDelete(task._id);
      }
    }

    res.status(200).json(list, { message: "Task Successfully Fetched!!" });
  } catch (error) {
    res.status(404).json({ message: "not able to send the task list" });
  }
};

export const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "task not found" });
  }
};

export const getVideosRelatedToTask = async (req, res) => {
  const task = req.params.task;
  const list = [];
  try {
    const videos = Video.find();
    for (let video of videos) {
      for (let tag of video.tags) {
        if (tag == task) {
          list.push(video);
        }
      }
    }
    res.status(200).json(list, { message: "Videos successfully fetched!" });
  } catch (err) {
    res.status(404).json({ message: "Videos not found!" });
  }
};

export const getVideo = async (req, res) => {
  const { id } = req.params.id;
  try {
    const video = Video.findById(id);
    res.status(200).json(video, { message: "Video successfully fetched!" });
  } catch (error) {
    res.status(404).json({ message: "video not found!" });
  }
};

