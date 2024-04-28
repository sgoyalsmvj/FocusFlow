import mongoose from "mongoose";

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
  role: {
    type: enumm["student", "creator"],
  },
});

const Creator = mongoose.model("Creator", creatorSchema);
export default Creator;