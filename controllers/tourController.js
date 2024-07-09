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
  tour = tours.filter((tour) => tour._id === req.params.id)[0];

  if (!tour) {
    res.status(404).json({
      status: "Fail",
      message: "No Tour with this ID",
    });
  } else {
    res.status(200).json({
      status: "success",
      result: tour,
    });
  }
};
