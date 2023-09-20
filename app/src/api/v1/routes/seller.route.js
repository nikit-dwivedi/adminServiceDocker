const express = require('express');
const router = express.Router();

const sellerController = require('../controllers/seller.controller');
const { authenticateSeller, authenticateAdmin } = require('../middlewares/authToken');
const { sellerViewCheck, sellerAddCheck } = require('../middlewares/permission');

// router.get('/all', sellerController.getSellers);
router.post('/auth', sellerAddCheck, sellerController.addNewAuth);
router.post('/onboard', sellerAddCheck, sellerController.onboardSeller);
router.get('/agent', sellerViewCheck, sellerController.getSellers);
router.get('/all', sellerViewCheck, sellerController.AllSellers);
router.get('/all/paginated', sellerViewCheck, sellerController.paginatedSellers);

router.post('/info', sellerViewCheck, sellerController.sellerInfo);
router.post('/yelo', sellerController.yeloSync)

module.exports = router;