const crystalController = require("./controllers/crystalController");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Crystal = require("./models/crystals");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const DB =
  "mongodb+srv://Cass:TTwsEGB6ZH9Mb8vQ@cluster0.etyfs.mongodb.net/crystalized";
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const createCrystal = async (req, res) => {
  try {
    const newCrystal = await Crystal.create(req.body);
    res.status(200).json({ status: "success", data: { crystal: newCrystal } });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

app.get("/api/v1/crystals", crystalController.getAllCrystals);
app.post("/api/v1/crystals", createCrystal);
app.listen(port, () => console.log(`Server running on port ${port}`));
