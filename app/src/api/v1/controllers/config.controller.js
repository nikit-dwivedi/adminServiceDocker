const { updateConfig, getConfig } = require("../helpers/config.helper")
const { orderStat } = require("../helpers/order.helpers")
const { getOutletStat } = require("../helpers/outlet.helper")
const { success, unknownError, badRequest } = require("../helpers/response_helper")
const { imageUpload } = require("../services/image.service")

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

exports.changeConfig = async (req, res) => {
    try {
        const token = req.headers.authorization
        if (req.file) {
            req.body.startBannerUrl =  await imageUpload(req.file, "banner")
        }
        const { status, message, data } = await updateConfig(req.body, token)
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        return unknownError(res, error.message)
    }
}

exports.getConfigDetails = async (req, res) => {
    try {
        const { status, message, data } = await getConfig()
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        return unknownError(res, error.message)
    }
}

