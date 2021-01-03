const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");
const Follower = require("../models/Follower");
const User = require("../models/User");
const Track = require("../models/Track");

const router = express.Router();
router.use(requireAuth);

router.get("/feed", async (req, res) => {
  requesterId = req.user._id;
  console.log(requesterId);
  try {
    followersList = await Follower.find(
      {
        userId: requesterId
      },
      { followerId: 1, _id: 0 }
    );
    followersList = followersList.map((x) => x.followerId);
    tracks = await Track.find({
      userId: { $in: followersList }
    })
      .limit(50)
      .sort({ createdAt: -1 });
    const promises = tracks.map(async (element) => {
      const userDetails = await User.findById(element.userId, "-password");
      return {
        _id: element._doc._id,
        post: { ...userDetails._doc },
        track: { ...element._doc }
      };
    });
    const posts = await Promise.all(promises);
    res.send(posts);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  const { _id } = req.user;
  userId = _id;
  followerId = req.body.followerId;
  try {
    follower = await Follower.findOne({
      $and: [
        {
          userId: userId
        },
        {
          followerId: followerId
        }
      ]
    });
    if (!follower) {
      const follower = new Follower({
        userId: userId,
        followerId: followerId
      });
      await follower.save();
      const user = await User.findById(userId);
      const followedUser = await User.findById(followerId);
      followedUser.followerCount = followedUser.followerCount + 1;
      user.followingCount = user.followingCount + 1;
      await user.save();
      await followedUser.save();
      res.send({ follower: follower });
    } else {
      await Follower.deleteOne({ _id: follower._id });
      const user = await User.findById(userId);
      const followedUser = await User.findById(followerId);
      user.followingCount = user.followingCount - 1;
      followedUser.followerCount = followedUser.followerCount - 1;
      await user.save();
      await followedUser.save();
      res.send({
        follower: { _id: follower._id, followerId, userId, delete: true }
      });
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
