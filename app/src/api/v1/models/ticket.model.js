const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticketId: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        default: null
    },
    role: {
        type: String,
        enum: ['customer', 'seller', 'partner'],
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    },
    status: {
        type: String,
        enum: ['Open', 'InProgress', 'Closed'],
        default: 'Open'
    },
    assignedTo: {
        type: String,
        default: null
    },
}, { timestamps: true });

const ticketModel = mongoose.model('ticket', ticketSchema);
module.exports = ticketModel