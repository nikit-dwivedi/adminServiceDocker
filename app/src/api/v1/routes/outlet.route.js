const express = require('express');
const router = express.Router();

const outletController = require('../controllers/outlet.controller');
const { outletAddCheck, outletViewCheck } = require('../middlewares/permission');

router.post('/', outletAddCheck, outletController.addNewOutlet)
router.get('/', outletViewCheck, outletController.getAllOutlet)
router.get('/info/:outletId', outletViewCheck, outletController.getOutletDetails)
router.get('/seller', outletViewCheck, outletController.getSellerOutlet)

module.exports = router;