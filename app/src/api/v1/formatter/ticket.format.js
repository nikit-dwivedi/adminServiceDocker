const { randomBytes } = require('node:crypto');

exports.ticketFormatter = (tokenData, ticketData, priority) => {
    const ticketId = randomBytes(4).toString('hex')
    const { customId: userId, role: roleId } = tokenData
    const { orderId, issue, description } = ticketData
    let role = "customer"
    switch (roleId) {
        case 1:
            role = "partner"
            break;
        case 2:
            role = "seller"
            break;
    }
    return { ticketId, userId, orderId, role, issue, description, priority }
}