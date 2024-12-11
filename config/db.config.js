const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION_URI)
    .then((res) => console.log("mongo db connected succesfully!"))
    .catch((err) => console.log(err.message));
};
module.exports = dbConnect;
