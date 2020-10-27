const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
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

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(422).send({ error: "Email not found" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY);
    res.send({
      token,
      user: {
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        dateOfBirth: user.dateOfBirth
      }
    });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
});

module.exports = router;
