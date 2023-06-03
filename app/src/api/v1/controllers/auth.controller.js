const { genrateOtpPhone, addAuth, verifyOtp, checkAuthByPhone, checkAuthByEmail, genrateOtpEmail, checkLogin, authList, authByUserId, changeUserRole } = require("../helpers/auth.helper")
const { unknownError, success, badRequest } = require("../helpers/response_helper");
const { getRoleIdByRoleId } = require("../helpers/role.helper");
const authModel = require("../models/auth.model");

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password, ...garbage } = req.body
            let garbageCheck = Object.entries(garbage)
            if (!email || !password || garbageCheck[0]) {
                return badRequest(res, "please provide valid data")
            }
            const { status, message, data } = await checkLogin(email, password)
            return status ? success(res, message, data) : badRequest(res, message)
        } catch (error) {
            console.log(error);
            return unknownError(res, error.message)
        }
    },
    addAdmin: async (req, res) => {

    },
    addUser: async (req, res) => {
        try {
            const { email, password, phone, roleId, username, ...garbage } = req.body
            let garbageCheck = Object.entries(garbage)
            if (!email || !password || !phone || !roleId || !username || garbageCheck[0]) {
                return badRequest(res, "please provide valid data")
            }
            const roleData = await getRoleIdByRoleId(roleId)
            if (!roleData.status) {
                return badRequest(res, roleData.message)
            }
            const data = { email, password, phone, username, roleId: roleData.data.roleId, roleName: roleData.data.roleName }
            const { status, message } = await addAuth(data);
            return status ? success(res, message) : badRequest(res, message);
        } catch (error) {
            return unknownError(res, error.message)
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const { status, message, data } = await authList();
            return status ? success(res, message, data) : badRequest(res, message);
        } catch (error) {
            return unknownError(res, error.message)
        }
    },
    getUserById: async (req, res) => {
        try {
            const { userId } = req.params
            const { status, message, data } = await authByUserId(userId);
            return status ? success(res, message, data) : badRequest(res, message);
        } catch (error) {
            return unknownError(res, error.message)
        }
    },
    changeRoleOfUser: async (req, res) => {
        try {
            const { userId, roleId } = req.body
            const { status, message, data } = changeUserRole(userId, roleId)
            return status ? success(res, message, data) : badRequest(res, message);
        } catch (error) {
            return unknownError(res, error.message)
        }
    }
}