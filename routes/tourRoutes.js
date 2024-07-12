const express = require("express");
const router = express.Router();
const {
  getAllTours,
  createNewTour,
  getTourById,
  checkIdValid,
  checkBody,
} = require("../controllers/tourController");

router.param("id", checkIdValid);

router.route("/").get(getAllTours).post(checkBody, createNewTour);
router.route("/:id").get(getTourById);
module.exports = router;
