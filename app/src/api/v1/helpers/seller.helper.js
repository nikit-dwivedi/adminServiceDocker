const { sellerFormatter } = require('../formatter/auth.format');
const { responseFormater } = require('../formatter/response.format');
const authModel = require('../models/auth.model');
const sellerModel = require('../models/seller.model');
const { get, post } = require('../services/axios.service');
const { onboardSellerUrl, addAuthUrl, getAgentSellerUrl, yeloUrl, getAllSellerUrl, getSellerInfoUrl, getAllPaginatedSellerUrl } = require('../urls/userService.url');

exports.addSellerAuth = async (bodyData, token) => {
    try {
        const url = addAuthUrl()
        const header = { "Authorization": token }
        bodyData.userType = "seller"
        const { status: axiosStatus, message, data } = await post(url, bodyData, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return { status: false, message: "something went wrong", data: error }
    }
}

exports.addSellerDetails = async (userId, agentId, bodyDate, token) => {
    try {
        const sellerFormat = sellerFormatter(userId, agentId, bodyDate);
        const header = { "Authorization": token }
        const url = onboardSellerUrl()
        const { status: axiosStatus, message } = await post(url, sellerFormat, header);
        return axiosStatus ? responseFormater(true, message) : responseFormater(false, message)
    } catch (error) {
        console.log(error);
        return { status: false, message: "something went wrong", data: error }
    }
}

exports.addYeloId = async (bodyData, token) => {
    try {
        const header = { "Authorization": token }
        const url = yeloUrl()
        const { status: axiosStatus, message, data } = await post(url, bodyData, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return { status: false, message: "something went wrong", data: error }
    }
}

exports.getAllAgentSeller = async (token) => {
    try {
        const header = { "Authorization": token }
        const url = getAgentSellerUrl()
        const { status: axiosStatus, message, data } = await get(url, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return { status: false, message: "something went wrong", data: error }
    }
}

exports.getPaginatedSeller = async (token,page, limit) => {
    try {
        const header = { "Authorization": token }
     
        const url = getAllPaginatedSellerUrl(page, limit)
        const { status: axiosStatus, message, data } = await get(url, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return { status: false, message: "something went wrong", data: error }
    }
}

exports.getAllSeller = async (token) => {
    try {
        const header = { "Authorization": token }
        const url = getAllSellerUrl()
        const { status: axiosStatus, message, data } = await get(url, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return { status: false, message: "something went wrong", data: error }
    }
}

exports.getSellerInfo = async (sellerId, token) => {
    try {
        const header = { "Authorization": token }
        const url = getSellerInfoUrl(sellerId)
        const { status: axiosStatus, message, data } = await get(url, header);
        return axiosStatus ? responseFormater(true, message, data) : responseFormater(false, message)
    } catch (error) {
        return { status: false, message: "something went wrong", data: error }
    }
}

