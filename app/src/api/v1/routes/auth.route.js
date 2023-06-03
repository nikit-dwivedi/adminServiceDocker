const express = require('express');
const { login, addUser, getAllUsers, getUserById, changeRoleOfUser } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/login', login);
router.post('/add', addUser);
router.get('/', getAllUsers);
router.get('/:userId',getUserById);
router.post('/change',changeRoleOfUser)


module.exports = router