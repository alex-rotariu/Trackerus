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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
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
  distance: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date
  },
  likes: [likeSchema],
  createdAt: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Track", trackSchema);
