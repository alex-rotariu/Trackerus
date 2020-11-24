const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");
const Follower = require("../models/Follower");
const User = require("../models/User");

const router = express.Router();
router.use(requireAuth);

router.get("/", async (req, res) => {
  const { name } = req.query;
  console.log(req.query);
  const users = await User.find({
    $or: [
      {
        username: { $regex: ".*" + name + ".*" }
      },
      {
        fullName: { $regex: ".*" + name + ".*" }
      }
    ]
  });
  res.send(users);
});

module.exports = router;
