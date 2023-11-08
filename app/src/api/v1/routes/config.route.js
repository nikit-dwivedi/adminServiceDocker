const express = require('express');
const { version, stat, changeConfig, getConfigDetails } = require('../controllers/config.controller');
const { authenticateUser, authenticateAdmin } = require('../middlewares/authToken');
const uploads = require('../middlewares/upload');
const router = express.Router();


router.post('/', authenticateAdmin,uploads.single("startBanner"), changeConfig)
router.get('/', getConfigDetails)
router.get('/version', version)
router.get('/stat', stat)

module.exports = router;