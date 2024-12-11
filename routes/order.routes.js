const express = require("express");
const orderController = require("../controller/order.controller");
const router = express.Router();
const athenticate =require("../middleware/auth.middleware")
const checkrole =require("../middleware/checkrole")

// router.get("/", orderController.orderdata);
// router.put("/:id",orderController.editData)

router.get("/",athenticate,checkrole(["admin"]),orderController.orderdata)
router.get("/:id",athenticate,checkrole(["admin"]),orderController.getOrderById)

module.exports = router;
