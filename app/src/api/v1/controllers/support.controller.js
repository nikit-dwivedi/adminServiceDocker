const { createSupportTicket, getSupportTicketById, updateSupportTicketStatus, assignSupportTicket, getSupportTickets } = require("../helpers/ticket.helper")
const { getOrderDetails } = require("../helpers/order.helpers")
const { parseJwt } = require("../middlewares/authToken")
const { badRequest, success, unknownError } = require("../helpers/response_helper")
const { getSellerInfo } = require("../helpers/seller.helper")

exports.addNewTicket = async (req, res) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { orderId, issue, description } = req.body
        let priority = "Low"
        if (token.role == 2) {
            priority = "Medium"
        }
        if (orderId) {
            priority = "Medium"
            const orderData = await getOrderDetails(orderId)
            if (!orderData.status) {
                return badRequest(res, orderData.message)
            }
            let status = ['pending', 'preparing', 'ready', 'dispatched']
            if (status.includes(orderData.data.status)) {
                priority = "High"
            }
        }
        const { status, message } = await createSupportTicket(token, req.body, priority)
        return status ? success(res, message) : badRequest(res, message)
    } catch (error) {
        return unknownError(res, error.message)
    }
}

exports.changeTicketStatus = async (req, res) => {
    try {
        const { ticketId, status: ticketStatus } = req.body
        const ticketCheck = await getSupportTicketById(ticketId)
        if (!ticketCheck.status) {
            return badRequest(res, ticketCheck.message)
        }
        if (!ticketCheck.data.assignedTo) {
            return badRequest(res, "please assign ticket to someone first")
        }
        if (ticketCheck.data.status == "Closed") {
            return badRequest(res, "Ticket already closed")
        }
        if (ticketCheck.data.status == "Open" && ticketStatus != "InProgress") {
            return badRequest(res, "invalid status")
        }
        if (ticketCheck.data.status == "InProgress" && ticketStatus != "Closed") {
            return badRequest(res, "invalid status")
        }
        if (ticketStatus == "InProgress") {
            const token = parseJwt(req.headers.authorization)
            const { status, message } = await assignSupportTicket(ticketId, token.userId)
            if (!status) {
                return badRequest(res, message)
            }
        }
        const { status, message } = await updateSupportTicketStatus(ticketId, ticketStatus)
        return status ? success(res, message) : badRequest(res, message)
    } catch (error) {
        return unknownError(res, error.message)
    }
}

exports.assignTicketToAgent = async (req, res) => {
    try {
        const { ticketId } = req.body
        const ticketCheck = await getSupportTicketById(ticketId)
        if (!ticketCheck.status) {
            return badRequest(res, ticketCheck.message)
        }
        const token = parseJwt(req.headers.authorization)
        const { status, message } = await assignSupportTicket(ticketId, token.userId)
        return status ? success(res, message) : badRequest(res, message)
    } catch (error) {
        return unknownError(res, error.message)
    }
}

exports.getTicketList = async (req, res) => {
    try {
        let { status: ticketStatus } = req.query
        if (ticketStatus == "All") {
            ticketStatus = ['Open', 'InProgress', 'Closed']
        }
        const { customId } = parseJwt(req.headers.authorization)
        const { status, message, data } = await getSupportTickets(ticketStatus, customId)
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        return unknownError(res, error.message)
    }
}

exports.getTicketDetails = async (req, res) => {
    try {
        const { ticketId } = req.params
        const { status, message, data } = await getSupportTicketById(ticketId)
        if (!status) {
            return badRequest(res, message)
        }
        let orderDetails = await getOrderDetails(data.orderId)
        data.orderDetails = orderDetails?.data
        console.log(orderDetails);
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        return unknownError(res, error.message)
    }
}