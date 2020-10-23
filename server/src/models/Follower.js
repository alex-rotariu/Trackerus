const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  followerOd: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

mongoose.model("Follower", followerSchema);
