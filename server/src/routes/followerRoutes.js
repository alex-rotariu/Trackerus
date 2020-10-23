const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");
const Follower = require("../models/Follower");

const router = express.Router();

module.exports = router;
