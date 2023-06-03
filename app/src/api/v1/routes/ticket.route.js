const express = require('express');
const router = express.Router();

const { addNewTicket, assignTicketToAgent, changeTicketStatus, getTicketDetails, getTicketList } = require('../controllers/support.controller');
const { authenticateSeller, authenticateAdmin, authenticateUser } = require('../middlewares/authToken');
const { sellerViewCheck, sellerAddCheck } = require('../middlewares/permission');

router.post('/', authenticateUser, addNewTicket);
router.get('/', authenticateUser, getTicketList);
router.post('/assign', authenticateAdmin, assignTicketToAgent);
router.post('/status', authenticateAdmin, changeTicketStatus);
router.get('/details/:ticketId', authenticateUser, getTicketDetails);

module.exports = router;