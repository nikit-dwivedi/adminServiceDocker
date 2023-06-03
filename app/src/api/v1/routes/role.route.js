const express = require('express');
const router = express.Router();

const roleController = require('../controllers/role.controller');
const { roleViewCheck, roleAddCheck, roleEditCheck } = require('../middlewares/permission');

router.get('/', roleViewCheck, roleController.getAllRole)
router.post('/change', roleEditCheck, roleController.editRole);
router.get('/admin', roleController.addAdminRole);
router.get('/seller', roleController.addSellerRole);
router.get('/customer', roleController.addCustomerRole);
router.get('/patner', roleController.addPatnerRole);
router.post('/custom', roleAddCheck, roleController.addCustomRole);

module.exports = router;