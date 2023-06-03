const authModel = require('../models/auth.model');
const { sendSms, sendMail } = require('../services/otp.service');
const { authFormatter } = require('../formatter/auth.format');
const { randomBytes } = require('node:crypto');
const { checkEncryption, createAuthToken, generateAdminToken } = require('../middlewares/authToken');
const { customerById } = require('./customer.helper');
const { sellerById } = require('./seller.helper');
const { responseFormater } = require('../formatter/response.format');

exports.addAuth = async (bodyData) => {
    try {
        const formattedData = await authFormatter(bodyData);
        const saveData = await authModel(formattedData);
        return await saveData.save() ? responseFormater(true, "manager added") : responseFormater(false, "manager not added")
    } catch (error) {
        return responseFormater(false, error.message)
    }
}
exports.checkAuthByPhone = async (phone) => {
    try {
        const authData = await authModel.exists({ phone });
        return authData ? authData : false;
    } catch (error) {
        return false
    }
}
exports.checkAuthByEmail = async (email) => {
    try {
        const authData = await authModel.exists({ email });
        return authData ? authData : false;
    } catch (error) {
        return false
    }
}
exports.authByUserId = async (userId) => {
    try {
        const authData = await authModel.findOne({ userId }).select("-_id email phone username");
        return authData ? responseFormater(true, "user detal", authData) : responseFormater(false, "no user found");
    } catch (error) {
        return false
    }
}
exports.authList = async () => {
    try {
        const authData = await authModel.find().select('-_id -__v -isLogin -roleId -password');
        return authData[0] ? responseFormater(true, "user list", authData) : responseFormater(false, "no user found");
    } catch (error) {
        return false
    }
}
exports.checkLogin = async (email, password) => {
    try {
        const userData = await authModel.findOne({ email });
        if (!userData) {
            return responseFormater(false, "user not found");
        }
        const passwordCheck = await checkEncryption(password, userData.password);
        if (!passwordCheck) {
            return responseFormater(false, "invalid password");;
        }
        const token = generateAdminToken(userData);
        return responseFormater(true, "login success", { token });
    }
    catch (error) {
        console.log(error);
        return responseFormater(false, error.message)
    }
}
exports.changeUserRole = async (userId, roleId) => {
    try {
        await authModel.findOneAndUpdate({ userId }, { roleId });
        return responseFormater(true, "role changed");
    } catch (error) {
        console.log(error);
        return responseFormater(false, error.message)
    }
}


const genrateOtpEmail = async (email) => {
    const date = new Date
    const otp = Math.floor(Math.random() * (9999 - 1000) + 1000)
    const reqId = randomBytes(4).toString('hex')
    const updatedData = await authModel.findOne({ email })
    if (updatedData.noOfOtp >= 3 && updatedData.date == date.getDate()) {
        return 1
    }
    updatedData.otp = otp;
    updatedData.reqId = reqId;
    updatedData.noOfOtp += 1
    updatedData.date = date.getDate()
    const saveData = await updatedData.save()
    if (!saveData) {
        return false
    }
    await sendMail(email, otp)
    return reqId
}

const getCustomId = async (userId, userType) => {
    try {
        switch (userType) {
            case "seller":
                const sellerData = await sellerById(userId)
                return sellerData.status ? sellerData.data.sellerId : ""
            case "partner":
                // const sellerData = await sellerById(userId)
                return ""
            default:
                const customerData = await customerById(userId)
                return customerData.status ? customerData.data.customerId : ""
        }
    } catch (error) {
        return ""
    }
}