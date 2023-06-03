const express = require("express");
const { authenticateAdmin } = require("./middlewares/authToken");
const router = express.Router();

require("../v1/config/mongodb");

const authRoute = require('./routes/auth.route.js')
const roleRoute = require('./routes/role.route')
const sellerRoute = require('./routes/seller.route')
const outletRoute = require('./routes/outlet.route')
const configRoute = require('./routes/config.route.js')
const ticketRoute = require('./routes/ticket.route')
const orderRoute = require('./routes/order.route')


router.use("/auth", authRoute);
router.use('/role', authenticateAdmin, roleRoute)
router.use('/seller', authenticateAdmin, sellerRoute)
router.use('/outlet', authenticateAdmin, outletRoute)
router.use('/config', configRoute)
router.use('/support', ticketRoute)
router.use('/order', orderRoute)

module.exports = router;
