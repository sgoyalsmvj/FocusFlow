import Student from "../models/student.models.js";
import Task from "../models/task.models.js";

const addNewTask = async (req, res) => {
  const { name, student } = req.body;
  try {
    const task = new Task({ name, timer: 0, status: "pending" });
    await task.save();
    const student = await Student.findById(student._id);
    await student.tasks.push(task._id);
    res.status(201).json({ message: "Task added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Task not Added!" });
  }
};

export { addNewTask, getTasks, updateTask, deleteTask, getVideosRelatedToTask, getVideo};