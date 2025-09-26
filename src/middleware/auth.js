const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      throw new Error("No token provided.");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userRepository.findById(decoded.userId);
    if (!user) {
      throw new Error("User not found.");
    }

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token has expired. Please log in again.",
        redirect: "/login",
      });
    }

    res.status(401).json({ message: "Authentication failed." });
  }
};

module.exports = auth;
