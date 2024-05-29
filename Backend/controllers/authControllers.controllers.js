import Creator from "../models/creator.models.js";
import Student from "../models/student.models.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (role == "creator") {
      // check if the creator already exists
      const creatorExists = await Creator.findOne({ email });
      if (creatorExists) {
        return res.status(400).json({ message: "Creator already exists" });
      }

      // create a new creator
      const creator = await Creator.create({ name, email, password, role });
      const token = creator.generateToken();
      const options = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.status(200).cookie("token", token, options).json({ creator, token });
    } else {
      // check if the student already exists
      const studentExists = await Student.findOne({ email });
      if (studentExists) {
        return res.status(400).json({ message: "Student already exists" });
      }

      // create a new student
      const student = await Student.create({ name, email, password, role });
      const token = student.generateToken();
      const options = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.status(200).cookie("token", token, options).json({ student, token });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (role == "creator") {
      //check if the creator exists
      const creator = await Creator.findOne({ email });
      if (!creator) {
        return res.status(404).json({ message: "Creator not found" });
      }

      // check if the password is correct
      const isMatch = await creator.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = creator.generateToken();
      const options = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),  
        samesite: "none",
        secure: true,
      };

      res.status(200).cookie("token", token, options).json({ creator, token });
    } else {
      //check if the student exists
      const student = await Student.findOne({ email });
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      const isMatch = await student.matchPassword(password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = student.generateToken();
      const options = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        samesite: "none",
        secure: true,
      };

      res.status(200).cookie("token", token, options).json({ student, token });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req,res) => {
  try {
    res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json({ message: "Logged out" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfile = (req, res) => {
  if (req.creator) {
    res.status(200).json(req.creator);
  } else {
    res.status(200).json(req.student);
  }
};

