const { responseFormater } = require('../formatter/response.format');
const configModel = require('../models/config.model');
const { post } = require('../services/axios.service');
const { closeAllOutletUrl } = require('../urls/inventoryService.url');

exports.updateConfig = async (updateData,token) => {
    try {
        const { customerAppVersion, merchantAppVersion, partnerAppVersion, marketPlaceStatus, databaseVersion, apiVersion, paymentGateway,startBannerUrl, ...garbage } = updateData
        if (Object.keys(garbage)[0]) {
            return responseFormater(false, "Invalid field")
        }
        const saveData = await configModel.findOneAndUpdate({}, updateData, { new: true })
        if (marketPlaceStatus !== undefined && !marketPlaceStatus) {
            const url = closeAllOutletUrl()
            await post(url,null,{Authorization:token})
        }
        return responseFormater(true, "config changed", saveData)
    } catch (error) {
        console.log(error.message);
        return responseFormater(false, error.message)
    }
}

exports.getConfig = async () => {
    try {
        const configData = await configModel.findOne().select("-_id -__v").lean()
        return responseFormater(true, "config details", configData)
    } catch (error) {
        return responseFormater(false, error.message)
    }
}