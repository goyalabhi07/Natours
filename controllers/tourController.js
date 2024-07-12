const fs = require("fs");
const tours = JSON.parse(fs.readFileSync("./Dev-data/tours.json"));
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    requestTime: req.requestTime,
    result: tours.length,
    data: tours,
  });
};

exports.createNewTour = (req, res) => {
  console.log(req.requestTime);
  res.send("done");
};

exports.getTourById = (req, res) => {
  res.status(200).json({
    status: "success",
    result: req.tour,
  });
};

exports.checkIdValid = (req, res, next, val) => {
  tour = tours.filter((tour) => tour._id === val)[0];

  if (!tour) {
    return res.status(404).json({
      status: "Fail",
      message: "No Tour with this ID",
    });
  }
  req.tour = tour;
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      status: "fail",
      message: "Missing Name or Price",
    });
  }
  next();
};
