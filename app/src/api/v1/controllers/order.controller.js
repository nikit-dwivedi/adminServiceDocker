const { getAllOrders, changeStatus, getOrderDetails } = require("../helpers/order.helpers");
const { parseJwt } = require("../middlewares/authToken");
const { success, badRequest, unknownError } = require("../helpers/response_helper");


//------------------------------------------Created By Madhur---------------------------------------------------------//
exports.allOrders = async (req,res) => {
    try {
        const {status:orderStatus, from , to} = req.query
        const { status, message, data } = await getAllOrders(orderStatus, from, to, req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        unknownError(res, error);
    }
}

exports.changeOrderStatus = async (req, res) => {
    try {
        const { orderId, orderStatus } = req.body
        const { status, message, data } = await changeStatus(req.body, req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        console.log(error);
        unknownError(res, error);
    }
}

exports.orderDetail = async(req,res)=>{
    try {
        const { orderId } = req.params
        const { status, message, data } = await getOrderDetails(orderId);
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        console.log(error);
        unknownError(res, error);
    }
}