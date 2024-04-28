import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Tasks:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
         
       }
    ], 
    role:{
        type:enumm['student','creator'],
    }
})

const Student = mongoose.model('Student', studentSchema);