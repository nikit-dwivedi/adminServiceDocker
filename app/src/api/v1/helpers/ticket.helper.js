const { responseFormater } = require("../formatter/response.format");
const { ticketFormatter } = require("../formatter/ticket.format");
const ticketModel = require("../models/ticket.model");

// Create a new support ticket
exports.createSupportTicket = async (tokenData, ticketData, priority) => {
    try {
        const formattedData = ticketFormatter(tokenData, ticketData, priority)
        const newTicket = new ticketModel(formattedData);
        await newTicket.save();
        return responseFormater(true, "ticket raised",)
    } catch (error) {
        console.log(error.message);
        return responseFormater(false, error.message,)
    }
}

// Get all support tickets
exports.getSupportTickets = async (status, userId) => {
    try {
        const query = userId ? { userId, status } : { status }
        const tickets = await ticketModel.find(query).sort({_id:-1}).select("-_id -createdAt -updatedAt  -__v")
        return tickets[0] ? responseFormater(true, "ticket list", tickets) : responseFormater(false, "No ticket found",)
    } catch (error) {
        console.log(error.message);
        return responseFormater(false, error.message,)

    }
}

// Get a support ticket by ID
exports.getSupportTicketById = async (ticketId) => {
    try {
        const ticket = await ticketModel.findOne({ ticketId }).select("-_id -createdAt -updatedAt  -__v")
        return ticket ? responseFormater(true, "ticket detail", ticket) : responseFormater(false, "No ticket found",)
    } catch (error) {
        console.log(error.message);
        return responseFormater(false, error.message,)
    }
}

// Update a support ticket
exports.updateSupportTicketStatus = async (ticketId, status) => {
    try {
        await ticketModel.findOneAndUpdate({ ticketId }, { status });
        return responseFormater(true, "ticket status changed")
    } catch (error) {
        console.log(error.message);
        return responseFormater(false, error.message,)

    }
}

// assign agent a support ticket
exports.assignSupportTicket = async (ticketId, assignedTo) => {
    try {
        await ticketModel.findOneAndUpdate({ ticketId }, { assignedTo });
        return responseFormater(true, "ticket assigned")
    } catch (error) {
        console.log(error.message);
        return responseFormater(false, error.message,)
    }
}
