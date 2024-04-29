import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    timer:{
        type: Number,
        required: true
    },

    status:{
        type:String,
        enumm: ['pending', 'completed'],
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});


const Task = mongoose.model('Task', taskSchema);
export default Task;