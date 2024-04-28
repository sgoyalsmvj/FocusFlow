import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

studentSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
})

studentSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
studentSchema.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  }

const Student = mongoose.model('Student', studentSchema);