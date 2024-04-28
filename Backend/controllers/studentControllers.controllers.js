import Student from '../models/studentModel.js';
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

          
            if(time==current){
                list.push(task.name);
            }
        }

        res.status(200).json(list);
    } catch (error) {
        res.status(404).json({ message: "not able to send the task list" });
    }

    

   

};




export const deleteTask = async (req, res) => {};


