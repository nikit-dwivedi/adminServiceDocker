const { responseFormater } = require('../formatter/response.format');
const { get, post } = require('../services/axios.service');
const { orderDetailsUrl, allOrdersUrl, changeOrderStatusUrl, orderStatUrl } = require('../urls/orderService.url');

exports.getOrderDetails = async (orderId) => {
    try {
        const url = orderDetailsUrl(orderId)
        const { status: axiosStatus, message, data } = await get(url);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}
exports.getAllOrders = async (orderStatus, from, to, token) => {  //------------------------Created By Madhur-------------------//
    try {
        const url = allOrdersUrl(orderStatus, from, to)
        const header = { Authorization: token }
        const { status: axiosStatus, message, data } = await get(url, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}
exports.changeStatus = async (bodyData, token) => { //-------------------------Created By Madhur----------------------//
    try {
        const url = changeOrderStatusUrl()
        const header = { Authorization: token }
        const { status: axiosStatus, message, data } = await post(url, bodyData, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}

exports.orderStat = async (token) => {
    try {
        const url = orderStatUrl()
        const header = { Authorization: token }
        const { status: axiosStatus, message, data } = await get(url, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}