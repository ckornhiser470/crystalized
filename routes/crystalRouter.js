const express = require("express");
const crystalController = require("../server/controllers/crystalController");

const router = express.Router();
router
  .route("/")
  .get(crystalController.getAllCrystals)
  .post(crystalController.createCrystal);
router
  .route("/:id")
  .get(crystalController.getCrystal)
  .patch(crystalController.updateCrystal)
  .delete(crystalController.deleteCrystal);
module.exports = router;
