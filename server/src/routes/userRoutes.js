const express = require("express");
const mongoose = require("mongoose");

const requireAuth = require("../middlewares/requireAuth");
const Follower = require("../models/Follower");
const User = require("../models/User");

const router = express.Router();
router.use(requireAuth);

router.post("/image", async (req, res) => {
  const { _id } = req.user;
  let user;
  try {
    user = await User.findById(_id);
    user.profilePic = {
      base64: req.body.base64,
      imageFormat: req.body.type
    };
    await user.save();
  } catch (err) { }
  res.send(user);
});

router.get("/", async (req, res) => {
  // console.log(req.user);
  const { name } = req.query;
  const users = await User.find(
    {
      $or: [
        {
          username: { $regex: ".*" + name + ".*" }
        },
        {
          fullName: { $regex: ".*" + name + ".*" }
        }
      ],
      _id: { $ne: req.user.id }
    },
    "-password"
  ).limit(10);
  res.send(users);
});

module.exports = router;
