const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = require("../models/Track");
const User = require("../models/User");

const router = express.Router();

router.use(requireAuth);

router.get("/", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id }).sort({
    createdAt: -1
  });
  const promises = tracks.map(async (element) => {
    const userDetails = await User.findById(
      { _id: element.userId },
      "-password"
    );

    return {
      ...userDetails._doc,
      ...element._doc,
      userId: userDetails._doc._id
    };
  });
  const newTracks = await Promise.all(promises);
  res.send(newTracks);
});

router.get("/:userId", async (req, res) => {
  const tracks = await Track.find({ userId: req.params.userId }).sort({
    createdAt: -1
  });
  const promises = tracks.map(async (element) => {
    const userDetails = await User.findById(
      { _id: element.userId },
      "-password"
    );

    return { ...userDetails._doc, ...element._doc };
  });
  const newTracks = await Promise.all(promises);
  res.send(newTracks);
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

router.post("/like", async (req, res) => {
  const { _id } = req.user;
  const { trackId } = req.body;
  try {
    const track = await Track.findById({ _id: trackId });
    if (track) {
      let liked = false;
      newLikes = [];
      track.likes.forEach((element) => {
        if (String(element.userId) !== String(_id)) {
          newLikes.push(element);
        } else {
          liked = true;
        }
      });
      if (!liked) {
        newLikes.push({ userId: _id });
      }
      track.likes = newLikes;
      await track.save();
      res.send({ track });
    }
  } catch (err) {
    console.log(err);
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
