const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");
const Follower = require("../models/Follower");

const router = express.Router();

router.get("/", async (req, res) => {
    console.log(req.body);

});

router.post("/", async (req, res) => {
    console.log(req.body);

});

module.exports = router;
