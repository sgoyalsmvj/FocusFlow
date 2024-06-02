import Student from "../models/student.models.js";
import Task from "../models/task.models.js";
import Video from "../models/video.models.js";

export const addNewTask = async (req, res) => {
  const { name } = req.body;
  const { student } = req;
  try {
    const task = await Task.create({ name, timer: 0, status: "pending" });
    await task.save();
    const curstudent = await Student.findById(student._id);
    curstudent.Tasks.push(task._id);
    await curstudent.save();
    res.status(201).json({ task, message: "task added successfully" });
  } catch (error) {
    res.status(404).json({ message: "not able to add the task" });
  }
};

export const getTasks = async (req, res) => {
  const { student } = req;
  
  try {
    const curStudent = await Student.findById(student._id).populate('Tasks');
    
    if (!curStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const tasks = curStudent.Tasks;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the start of the day

    const todaysTasks = tasks.filter(task => {
      const taskDate = new Date(task.createdAt);
      taskDate.setHours(0, 0, 0, 0); // Set to the start of the day
      return taskDate.getTime() === today.getTime();
    });

    res.status(200).json({ list: todaysTasks, message: 'Tasks successfully fetched!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { timer, isActive, isDone } = req.body;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.timer = timer;
    if(isDone === true) {
      task.status = "completed";
    }

    await task.save();

    res.json({ message: 'Task updated successfully', task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const deleteTask = async (req, res) => {
  const id = req.params.id;
  const { student } = req;
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
  const keywords = decodeURIComponent(req.params.keywords).toLowerCase().split(" ");
  // console.log(keywords)
  try {
    const videos = await Video.find({ tags: { $in: keywords } });
    // console.log(videos);
    res.status(200).json({ videos, message: "Videos successfully fetched!" });
  } catch (err) {
    res.status(404).json({ message: "Videos not found!" });
  }
};

export const getVideo = async (req, res) => {
  const { videoId } = req.params;
  console.log(videoId);
  try {
    const video =await Video.findById(videoId);
    // console.log(video);
    res.status(200).json({ video, message: "Video successfully fetched!" });
  } catch (error) {
    res.status(404).json({ message:error.message });
  }
};
