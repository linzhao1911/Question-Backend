const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = async (email, password) => {
  const user = new User({ email, password });
  await user.save();
  return "User registered successfully!";
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

module.exports = { registerUser, loginUser };
