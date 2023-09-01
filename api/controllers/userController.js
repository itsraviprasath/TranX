const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .send({ message: "User with given email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phone, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
    console.log("User registered successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { id: user._id, name: user.name, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
          console.log(token);
          // jwt.sign(
          //   { id: user._id, name: user.name, email: user.email },
          //   process.env.JWT_SECRET,
          //   { expiresIn: "1h" },
          //   (err, token) => {
          //     if (err) throw err;
          //     res.cookie("token", token).json(user);
          //   }
          // );
          res.status(200).json(user);
          console.log("Login Successful");
        } else {
          res.status(401).send({ message: "Invalid Credentials" });
          console.log("Invalid Credentials");
        }
      });
    } else {
      res.status(401).send({ message: "Invalid Credentials" });
      console.log("Invalid Credentials");
    }
  });
};

module.exports = { register, login };
