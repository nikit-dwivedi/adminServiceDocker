const { addOutlet, allOutlet, outletDetail, sellerOutlet } = require("../helpers/outlet.helper");
const { success, badRequest, unknownError } = require("../helpers/response_helper");

exports.addNewOutlet = async (req, res) => {
    try {
        const { status, message, data } = await addOutlet(req.body, req.headers.authorization);
        return status ? success(res, message) : badRequest(res, message)
    } catch (error) {
        unknownError(res, error);
    }
}
exports.getAllOutlet = async (req, res) => {
    try {
        const { status, message, data } = await allOutlet(req.body, req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        unknownError(res, error);
    }
}
exports.getOutletDetails = async (req, res) => {
    try {
        const { outletId } = req.params
        const { status, message, data } = await outletDetail(outletId, req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        unknownError(res, error);
    }
}
exports.getSellerOutlet = async (req, res) => {
    try {
        const { sellerId, mode } = req.query
        const { status, message, data } = await sellerOutlet(sellerId, mode, req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        unknownError(res, error);
    }
}