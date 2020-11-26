require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const followerRoutes = require("./routes/followerRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;
const mongoUri = `mongodb+srv://alexDB:${process.env.DB_PASS}@trackerus.veqh6.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/tracks", trackRoutes);
app.use("/followers", followerRoutes);
app.use("/users", userRoutes);

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting too mongo", err);
});

app.listen(PORT, () => {
  console.log(`Listenting on port ${PORT}`);
});
