const express = require('express');
const router = express.Router();

const outletController = require('../controllers/outlet.controller');
const { outletAddCheck, outletViewCheck } = require('../middlewares/permission');
const uploads = require('../middlewares/upload');

router.post('/', outletAddCheck, uploads.single('outletImage'), outletController.addNewOutlet)
router.get('/', outletViewCheck, outletController.getAllOutlet)
router.get('/paginated', outletViewCheck, outletController.getAllPaginatedOutlet);
router.get('/info/:outletId', outletViewCheck, outletController.getOutletDetails)
router.get('/seller', outletViewCheck, outletController.getSellerOutlet)

module.exports = router;