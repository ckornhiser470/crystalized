const Crystal = require("../models/crystals");

exports.getAllCrystals = async (req, res) => {
  try {
    const crystals = await Crystal.find();
    res.status(200).json({ status: "success", data: { crystals } });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
