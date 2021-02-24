const { readFileSync } = require("fs");
const { connect } = require("mongoose");
const dotenv = require("dotenv");
const Crystal = require("../../models/crystals");

dotenv.config({ path: "./config.env" });

const DB =
  "mongodb+srv://Cass:TTwsEGB6ZH9Mb8vQ@cluster0.etyfs.mongodb.net/crystalized";
connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => console.log("DB connection successful!"));
//READ json FILE

const crystals = JSON.parse(
  readFileSync(`${__dirname}/crystals.json`, "utf-8")
);

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Crystal.create(crystals);
    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit(); //would otherwise run forever
};

//DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Crystal.deleteMany();
    console.log("Data successfully deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
//import or delete

// node dev-data/data/import-dev-data.js --delete
// node dev-data/data/impor-dev-data.js --import

console.log(process.argv);
