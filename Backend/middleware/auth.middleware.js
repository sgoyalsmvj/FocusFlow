import Creator from "../models/creator.models.js";
import Student from "../models/student.models.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        // Use 401 Unauthorized for authentication errors
        message: "Please login first",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Assuming users are either creators or students, not both
    const user =
      (await Creator.findById(decoded._id)) ||
      (await Student.findById(decoded._id));

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user; // Attach the user object to the request for use in next middleware/routes
    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
