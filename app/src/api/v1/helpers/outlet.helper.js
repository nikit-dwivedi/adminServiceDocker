const { responseFormater } = require("../formatter/response.format")
const { post, get } = require("../services/axios.service")
const { addOutletUrl, allOutletUrl, outletByOutletIdUrl, sellerOutletUrl, outletStatUrl, allOutletPaginationUrl } = require("../urls/inventoryService.url")

exports.addOutlet = async (bodyData, token) => {
    try {
        const url = addOutletUrl()
        const header = { Authorization: token }
        const { status, message, data } = await post(url, bodyData, header)
        return responseFormater(status, message, data)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}
exports.allOutlet = async (token) => {
    try {
        console.log(token);
        const url = allOutletUrl()
        const header = { Authorization: token }
        const { status, message, data } = await get(url, header)
        return responseFormater(status, message, data)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}
exports.allOutletPaginated = async (token, page, limit) => {
    try {
        const url = allOutletPaginationUrl(page, limit)
        const header = { Authorization: token }
        const { status, message, data } = await get(url, header)
        return responseFormater(status, message, data)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}
exports.outletDetail = async (outletId, token) => {
    try {
        const url = outletByOutletIdUrl(outletId)
        const header = { Authorization: token }
        const { status, message, data } = await get(url, header)
        return responseFormater(status, message, data)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}
exports.sellerOutlet = async (sellerId, mode, token) => {
    try {
        const url = sellerOutletUrl(sellerId, mode)
        const header = { Authorization: token }
        const { status, message, data } = await get(url, header)
        return responseFormater(status, message, data)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}

exports.getOutletStat = async (token) => {
    try {
        const url = outletStatUrl()
        const header = { Authorization: token }
        const { status: axiosStatus, message, data } = await get(url, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}