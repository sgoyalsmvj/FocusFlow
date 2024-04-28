import Studdent from '../models/studentModel.js';
import Task from '../models/taskModel.js';















const getTasks = async (req, res) => {


    try {
        const student = await Student.findById(req.body.student._id);
        const task=student.Tasks;
        const list =[];
         
        for (let i = 0; i < task.length; i++) {
            const task = await Task.findById(task[i]);

            const current=Date.now();
            const time = task.createdAt;

            current.sethours(0,0,0,0);
            time.sethours(0,0,0,0);

          
            if(task.createdAt==Date.now()){
                list.push(task.name);
            }else{
                 await Task.findByIdAndDelete(task._id);
            }
        }

        res.status(200).json(list);
    } catch (error) {
        res.status(404).json({ message: "not able to send the task list" });
    }

    

   

};

export const updateTask = async (req, res) => {};


export const deleteTask = async (req, res) => {};


