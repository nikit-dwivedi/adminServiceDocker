const { changeUserType } = require("../helpers/auth.helper");
const { success, badRequest, unknownError } = require("../helpers/response_helper");
const { addSellerDetails, getAllSeller, sellerBySellerId, changeVerifyStatus, addSellerAuth, addYeloId, getAllAgentSeller, getSellerInfo } = require("../helpers/seller.helper");
const { parseJwt } = require("../middlewares/authToken");


exports.addNewAuth = async (req, res) => {
    try {
        const { status, message, data } = await addSellerAuth(req.body, req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message, data);
    } catch (error) {
        return unknownError(res, error.message)
    }
}
exports.onboardSeller = async (req, res) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { userId } = req.body
        const { status, message } = await addSellerDetails(userId, token.userId, req.body, req.headers.authorization);
        return status ? success(res, message) : badRequest(res, message);
    } catch (error) {
        return unknownError(res, "unknown error");
    }
}
exports.yeloSync = async (req, res) => {
    try {
        const { status, message, data } = await addYeloId(req.body, req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message, data);
    } catch (error) {
        return unknownError(res, "unknown error")
    }
}
exports.getSellers = async (req, res) => {
    try {
        const { status, message, data } = await getAllAgentSeller(req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message, data);
    } catch (error) {
        return unknownError(res, "unknown error")
    }
}
exports.AllSellers = async (req, res) => {
    try {
        const { status, message, data } = await getAllSeller(req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message, data);
    } catch (error) {
        return unknownError(res, "unknown error")
    }
}
exports.sellerInfo = async (req, res) => {
    try {
        const { sellerId } = req.body
        const { status, message, data } = await getSellerInfo(sellerId,req.headers.authorization);
        return status ? success(res, message, data) : badRequest(res, message, data);
    } catch (error) {
        return unknownError(res, "unknown error")
    }
}
// exports.getSellerInfo = async (req, res) => {
//     try {
//         const token = parseJwt(req.headers.authorization)
//         const { customId } = token
//         const { status, message, data } = await sellerBySellerId(customId);
//         return status ? success(res, message, data) : badRequest(res, message, data);
//     } catch (error) {
//         console.log(error);
//         return unknownError(res, "unknown error")
//     }
// }
exports.verifySeller = async (req, res) => {
    try {
        const { sellerId, verify } = req.body
        const { status, message, data } = await changeVerifyStatus(sellerId, verify);
        return status ? success(res, message) : badRequest(res, message, data)
    } catch (error) {
        return unknownError(res, "unknown error");
    }
}