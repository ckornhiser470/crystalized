const mongoose = require("mongoose");
const dotenv = require("dotenv");

const port = process.env.PORT || 5000;
const app = require("./app");

const path = require("path");

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
const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message, err.stack);
  console.log(DB, process.env.DATABASE_PASSWORD, process.env.DATABASE);
  server.close(() => {
    process.exit(1);
  });
});
