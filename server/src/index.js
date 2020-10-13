require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;
const mongoUri = `mongodb+srv://alexDB:${process.env.DB_PASS}@trackerus.veqh6.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
console.log(PORT);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting too mongo", err);
});

app.listen(PORT, () => {
  console.log(`Listenting on port ${PORT}`);
});
