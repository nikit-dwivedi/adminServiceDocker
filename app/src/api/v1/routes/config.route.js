const express = require('express');
const { version, stat } = require('../controllers/config.controller');
const { authenticateUser } = require('../middlewares/authToken');
const router = express.Router();


router.get('/version', version)
router.get('/stat',stat)

module.exports = router;