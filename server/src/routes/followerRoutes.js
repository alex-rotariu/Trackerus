const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");
const Follower = require("../models/Follower");
const User = require("../models/User");

const router = express.Router();
router.use(requireAuth);

router.get("/", async (req, res) => {
    console.log(req.body);

});

router.post("/", async (req, res) => {
    const { _id } = req.user
    userId = _id
    followerId = req.body.followerId
    try {
        follower = await Follower.findOne(
            {
                $and:
                    [
                        {
                            userId: userId
                        },
                        {
                            followerId: followerId
                        }
                    ]
            })
        if (!follower) {
            const follower = new Follower({
                userId: userId,
                followerId: followerId
            })
            await follower.save()
            const user = await User.findById(userId)
            const followedUser = await User.findById(followerId)
            followedUser.followerCount = followedUser.followerCount + 1
            user.followingCount = user.followingCount + 1
            await user.save();
            await followedUser.save();
            res.send({ follower: follower })
        } else {
            await Follower.deleteOne({ _id: follower._id })
            const user = await User.findById(userId)
            const followedUser = await User.findById(followerId)
            user.followingCount = user.followingCount - 1
            followedUser.followerCount = followedUser.followerCount - 1
            await user.save();
            await followedUser.save();
            res.send({ follower: { _id: follower._id, followerId, userId, delete: true } })
        }
    } catch (err) {
        res.send(err)
    }

});

module.exports = router;
