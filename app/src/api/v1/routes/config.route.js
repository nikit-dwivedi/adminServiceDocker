const express = require('express');
const { version, stat, changeConfig, getConfigDetails,testUrl } = require('../controllers/config.controller');
const { authenticateUser, authenticateAdmin } = require('../middlewares/authToken');
const uploads = require('../middlewares/upload');
const router = express.Router();


router.post('/', authenticateAdmin, changeConfig)
router.get('/', getConfigDetails)
router.get('/version', version)
router.get('/stat', stat)
router.get('/test',uploads.single("filename"),testUrl)

module.exports = router;