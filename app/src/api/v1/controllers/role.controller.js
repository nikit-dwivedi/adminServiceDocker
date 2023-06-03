const { customRoleFormater, sellerRoleFormater, patnerRoleFormater, customerRoleFormater, adminRoleFormater } = require("../formatter/role.format")
const { success, badRequest, unknownError } = require("../helpers/response_helper")
const { addRole, getUserRole, getDefaultRoleId, changeRole, } = require("../helpers/role.helper")
const { parseJwt } = require("../middlewares/authToken")

exports.addCustomerRole = async (req, res) => {
    try {
        const permissions = customerRoleFormater()
        const userId = 'CHMOD777'
        const { status, message, data } = await addRole(userId, "customer", permissions);
        return status ? success(res, message) : badRequest(res, message);
    } catch (error) {
        return unknownError(res, error.message)
    }
}
exports.addSellerRole = async (req, res) => {
    try {
        const permissions = sellerRoleFormater()
        const userId = 'CHMOD777'
        const { status, message, data } = await addRole(userId, "seller", permissions);
        return status ? success(res, message) : badRequest(res, message);
    } catch (error) {
        return unknownError(res, error.message)
    }
}
exports.addPatnerRole = async (req, res) => {
    try {
        const permissions = patnerRoleFormater()
        const userId = 'CHMOD777'
        const { status, message, data } = await addRole(userId, "patner", permissions);
        return status ? success(res, message) : badRequest(res, message);
    } catch (error) {
        return unknownError(res, error.message)
    }
}
exports.addCustomRole = async (req, res) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { roleName, permissions } = req.body
        const permissionsFormat = customRoleFormater(permissions)
        const { status, message, data } = await addRole(token.userId, roleName, permissionsFormat);
        return status ? success(res, message) : badRequest(res, message);
    } catch (error) {
        return unknownError(res, error.message)
    }
}
exports.addAdminRole = async (req, res) => {
    try {
        const userId = 'CHMOD777'
        const permissionsFormat = adminRoleFormater()
        const { status, message, data } = await addRole(userId, "admin", permissionsFormat);
        return status ? success(res, message) : badRequest(res, message);
    } catch (error) {
        return unknownError(res, error.message)
    }
}
exports.getAllRole = async (req, res) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, message, data } = await getUserRole(token.userId)
        return status ? success(res, message, data) : badRequest(res, message)
    } catch (error) {
        return unknownError(res, error.message)
    }
}

exports.editRole = async (req, res) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { roleId, permissions } = req.body
        const { status, message } = await changeRole(roleId, permissions)
        return status ? success(res, message) : badRequest(res, message)
    } catch (error) {
        return unknownError(res, error.message)
    }
}