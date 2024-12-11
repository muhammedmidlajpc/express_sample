const mongoose = require("mongoose");
const Order = require("../model/order.model");
const { json } = require("express");
module.exports.orderdata = async (req, res) => {
  try {
    const order = await Order.find();
    res.send(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.editData = async (req, res) => {
  try {
    const id = req.params.id;
    const status = req.body.status;

    //update in db method 1

    // const order=await Order.findOne({orderId:id})
    // order.status=status
    // order.save()
    // res.send(order)

    //

    //method 2
    const uOrder = await Order.findOneAndUpdate(
      { orderId: id },
      { $set: { status: status } },
      { new: true }
    );
    res.send(uOrder);
    //
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.getOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const order=await Order.findOne({orderId:id})
    res.json({order})
  } catch (error) {
    console.log(error.message);
  }
};
