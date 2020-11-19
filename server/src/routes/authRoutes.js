const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const validate = require("../validators/validate");
const {
  userSignInRules,
  userSignUpRules
} = require("../validators/userValidator");
const router = express.Router();

router.post("/signup", userSignUpRules(), validate, async (req, res) => {
  const { username, email, fullName, dateOfBirth, password } = req.body;
  try {
    const user = new User({
      username,
      email,
      fullName,
      dateOfBirth,
      password,
      createdAt: Date.now()
    });
    await user.save();
    const token = jwt.sign(
      {
        userId: user._id
      },
      process.env.JWT_KEY
    );
    res.send({
      token,
      user: {
        _id: user._id,
        username,
        email,
        fullName,
        dateOfBirth
      }
    });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/signin", userSignInRules(), validate, async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY);
    res.send({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        dateOfBirth: user.dateOfBirth
      }
    });
  } catch (err) {
    return res.status(422).send({ error: "Incorrect user or password" });
  }
});

module.exports = router;
