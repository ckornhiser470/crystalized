const Crystal = require("../models/crystals");

exports.getAllCrystals = async (req, res) => {
  try {
    const crystals = await Crystal.find();
    res.status(200).json({ status: "success", crystals });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getCrystal = async (req, res) => {
  let query = Crystal.findById(req.params.id);

  const doc = await query;
  if (!doc) {
    return next(new AppError("No tour found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: { doc },
  });
};
exports.createCrystal = async (req, res) => {
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
exports.updateCrystal = async (req, res) => {
  const doc = await Crystal.findByIdAndUpdate(req.params.id, req.body);
  // new: true,
  // runValidators: true,
  // //this checks that types are right, etc

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      doc,
    },
  });
};
exports.deleteCrystal = async (req, res) => {
  const doc = await Crystal.findByIdAndDelete(req.params.id);
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};
