const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Follower = mongoose.model("Follower");

const router = express.Router();

module.exports = router