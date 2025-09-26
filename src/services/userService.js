const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userService = {
  register: async (userData) => {
    const { email, password, username, role, phone } = userData;

    // 1. validasi
    if ((!email, !password || !username)) {
      throw new Error("Email, password, and username are required");
    }

    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("User with this email already exists.");
    }

    // 2. Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Simpan pengguna ke database
    const newUser = await userRepository.create({
      email,
      password: hashedPassword,
      username,
      role: "Cashier",
      phone,
    });

    return newUser;
  },

  login: async (email, password) => {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Invalid email or password.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid email or password.");
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    return { token, user };
  },

  getById: async (id) => {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("User with id is not exists");
    }

    return { user };
  },
};

module.exports = userService;
