import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    taskarray:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task',
         
       }
    ] 
      
    
  



})

const Student = mongoose.model('students', studentSchema);