//connecting to an existing db

const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./config/db.config");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser())
dbConnect();
const orderRouter = require("./routes/order.routes");
const loginrouter = require("./routes/auth.routes");

app.use("/orders", orderRouter);
app.use("/", loginrouter);

const Users = require("./model/user.model");

app.get("/users", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});

app.listen(process.env.PORT, (err) => {
  console.log("server is running!");
});

//
