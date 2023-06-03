const express = require('express');
const router = express.Router();


const { allOrders, changeOrderStatus, orderDetail } = require("../controllers/order.controller")



router.get("/outlets", allOrders)
router.post("/status", changeOrderStatus)
router.get("/detail/:orderId", orderDetail)


module.exports = router