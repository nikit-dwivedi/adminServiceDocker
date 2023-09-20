const { orderStat } = require("../helpers/order.helpers")
const { getOutletStat } = require("../helpers/outlet.helper")
const { success, unknownError, badRequest } = require("../helpers/response_helper")

exports.version = async (req, res) => {
    try {
        return success(res, "app version", 15.0)
    } catch (error) {
        return unknownError(res, error.message)
    }
}

exports.stat = async (req, res) => {
    try {
        const { status: orderStatus, message: orderMessage, data: orderData } = await orderStat(req.headers.authorization)
        const { status: outletStatus, message: outletMessage, data: outletData } = await getOutletStat(req.headers.authorization)
        return orderStatus && outletStatus ? success(res, JSON.stringify([orderMessage, outletMessage]), { order: orderData, outlet: outletData }) : badRequest(res, [orderMessage, outletMessage])
    } catch (error) {
        return unknownError(res, error.message)
    }
}