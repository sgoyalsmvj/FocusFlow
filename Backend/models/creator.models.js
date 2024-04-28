import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import e from "express";

const creatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    enum:['student','creator'],
  },
});

creatorSchema.pre('save', async function(next){
  if(this.isModified('password')){
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
  }
  next();
})

creatorSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

creatorSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
}

const Creator = mongoose.model("Creator", creatorSchema);
export default Creator;