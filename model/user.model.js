const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role:{
      type:String
    }
  });
  const userModel = mongoose.model("users", userSchema);
  module.exports = userModel;