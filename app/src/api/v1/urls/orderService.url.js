const baseUrlV1Prod = 'https://order.fablocdn.com/v1'
const baseUrlV1Stage = 'http://139.59.60.119:4007/v1'
const localhost = 'http://localhost:4007/v1'

exports.orderDetailsUrl = (orderId) => {
    return `${baseUrlV1Prod}/order/details/${orderId}`
}
exports.allOrdersUrl = (status, from, to) => {
    return from && to ? `${baseUrlV1Prod}/order?status=${status}&from=${from}&to=${to}` : `${baseUrlV1Prod}/order?status=${status}`
}
exports.changeOrderStatusUrl = () => {
    return `${baseUrlV1Prod}/order/status`
}
exports.orderStatUrl = () => {
    return `${baseUrlV1Prod}/order/stat`
}