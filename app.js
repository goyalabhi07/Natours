// const fs = require("fs");
const express = require("express");
const tourRoutes = require("./routes/tourRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json()); // middlewere used to get the response body

//this is the manually created middleware which will be applied to all the requestes which are defined after it in the file.
app.use((req, res, next) => {
  // console.log("hello from the middleware");
  next();
});

//this is the manually created middleware which will ADD the time to the 'res' object
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// const port = 3000;
// const tours = JSON.parse(fs.readFileSync("./Dev-data/tours.json"));

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createNewTour);

// if we want an optional params then we will use the  '?' in front of query params. example -> '/api/v1/tours/:id/:x?/:y'. here 'x' is the optional parameters.
// app.get("/api/v1/tours/:id", getTourById);

//combine all the same routes together and use them as below, fore more clean code
// app.route("/api/v1/tours").get(getAllTours).post(createNewTour);
// app.route("/api/v1/tours/:id").get(getTourById);

//we shift all the routes in the different folder and use those routes this way..
app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/users", tourRoutes);
// app.listen(port, () => {
//   console.log(`app is listening on port ${port}`);
// });
module.exports = app;
