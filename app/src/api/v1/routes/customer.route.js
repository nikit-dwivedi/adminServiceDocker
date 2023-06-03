const express = require('express');
const { onboard, currentAddress, addAddress, getCustomerById, removeUserAddress } = require('../controllers/customer.controller');
const { authenticateUser } = require('../middlewares/authToken');
const router = express.Router();


router.post('/onboard', authenticateUser, onboard);
router.post('/address', authenticateUser, currentAddress);
router.get('/address/remove/:addressId', authenticateUser, removeUserAddress);
router.post('/address/add', authenticateUser, addAddress);
router.get('/', authenticateUser, getCustomerById)

module.exports = router;