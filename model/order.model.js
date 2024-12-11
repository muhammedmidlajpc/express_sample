const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    default: Date.now()
  },
  customerName: {
    type: String,
    required: true
  },
  items: {
    type: [Object]
  },
  total: {
    type: Number
  },
  orderDate: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: String,
    default: "PENDING"
  }
},{collection:"orders"});

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;

//

