const { responseFormater } = require('../formatter/response.format');
const configModel = require('../models/config.model');

exports.updateConfig = async (updateData) => {
    try {
        const { customerAppVersion, merchantAppVersion, partnerAppVersion, marketPlaceStatus, databaseVersion, apiVersion, paymentGateway, ...garbage } = updateData
        if (Object.keys(garbage)[0]) {
            return responseFormater(false, "Invalid field")
        }
        const saveData = await configModel.findOneAndUpdate({}, updateData, { new: true })
        return responseFormater(true, "config added", saveData)
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