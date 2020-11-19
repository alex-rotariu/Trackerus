const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = require("../models/Track");

const router = express.Router();

router.use(requireAuth);

router.get("/", async (req, res) => {
  console.log(req.body);
  const tracks = await Track.find({ userId: req.user._id });
  console.log(tracks);
  res.send(tracks);
});

router.post("/", async (req, res) => {
  const { trackName, locations } = req.body;
  if (!trackName || !locations) {
    res.status(422).send({ error: "You must provide a name and locations" });
  }
  try {
    const track = new Track({ trackName, locations, userId: req.user._id });
    await track.save();
    res.send({ track });
  } catch (err) {
    console.log(err);
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
