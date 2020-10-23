const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number
  }
});

const likeSchema = new mongoose.Schema({
  username: String,
  createdAt: Date
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  trackName: {
    type: String,
    default: ""
  },
  locations: [pointSchema],
  createdAt: {
    type: Date
  },
  likes: [likeSchema]
});

mongoose.model("Track", trackSchema);
