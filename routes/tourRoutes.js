const express = require("express");
const router = express.Router();
const {
  getAllTours,
  createNewTour,
  getTourById,
} = require("../controllers/tourController");

router.route("/").get(getAllTours).post(createNewTour);
router.route("/:id").get(getTourById);
module.exports = router;
