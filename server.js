const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.DATABASE, {
    useURLParsers: true,
  })
  .then(() => {
    console.log("databse connection successful..");
  })
  .catch((err) => {
    console.log("error in copnnecting Databse", err);
  });
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
