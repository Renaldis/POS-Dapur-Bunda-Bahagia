const userService = require("../../services/userService");

const userController = {
  register: async (req, res) => {
    try {
      const newUser = await userService.register(req.body);
      res
        .status(201)
        .json({ message: "User created successfully.", user: newUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const { token, user } = await userService.login(email, password);
      res.status(200).json({ message: "Login successful.", token, user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getMyProfile: async (req, res) => {
    try {
      const profile = await userService.getById(req.user.id);
      res.status(200).json(profile);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = userController;
