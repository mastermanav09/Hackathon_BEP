const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signUp = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;

    if (!email || !password || !name) {
      const error = new Error("Insufficient details!");
      error.statusCode = 400;
      throw error;
    }

    email = email.toLowerCase();
    let user = await User.findOne({ email: email });

    if (user) {
      const error = new Error("User already exists with this email.");
      error.statusCode = 404;
      throw error;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      email,
      password: passwordHash,
    });

    const token = jwt.sign({ user }, process.env.JWT_SECRET);

    return res.json({
      message: "Account created successfully",
      token,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json(errorMessage("email and password are required"));
      return;
    }
    email = email.toLowerCase();
    let user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(400).json(errorMessage("Invalid email/password"));
    }
    let passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
      return res.status(400).json(errorMessage("Invalid email/password"));
    }
    const token = await jwt.sign({ user }, process.env.JWT_SECRET);
    return res.json(
      successMessage({
        message: "Sign In successful",
        token,
      })
    );
  } catch (err) {
    console.log("ERROR ,", err);
    return res.status(400).json(errorMessage(err.message));
  }
};
