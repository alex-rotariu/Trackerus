const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = require("../models/Track");
const User = require("../models/User");

const router = express.Router();

router.use(requireAuth);

router.get("/", async (req, res) => {
  console.log(req.body);
  const tracks = await Track.find({ userId: req.user._id });
  console.log(tracks);
  res.send(tracks);
});

router.post("/", async (req, res) => {
  const { _id } = req.user;
  const { trackName, locations, distance } = req.body;
  if (!trackName || !locations) {
    res.status(422).send({ error: "You must provide a name and locations" });
  }
  try {
    const track = new Track({
      trackName,
      locations,
      distance,
      userId: req.user._id,
      createdAt: Date.now()
    });
    await track.save();
    const user = await User.findById(_id);
    user.trackCount = user.trackCount + 1;
    await user.save();
    res.send({ track });
  } catch (err) {
    console.log(err);
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
