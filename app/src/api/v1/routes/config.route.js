const express = require('express');
const { version, stat, changeConfig, getConfigDetails } = require('../controllers/config.controller');
const { authenticateUser, authenticateAdmin } = require('../middlewares/authToken');
const router = express.Router();


router.post('/', authenticateAdmin, changeConfig)
router.get('/', getConfigDetails)
router.get('/version', version)
router.get('/stat', stat)

module.exports = router;