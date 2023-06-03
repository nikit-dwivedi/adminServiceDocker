const roleModel = require('../models/role.model');
const { randomBytes } = require('node:crypto');
const { responseFormater } = require('../formatter/response.format');
const { customRoleFormater } = require('../formatter/role.format');


exports.addRole = async (userId, roleName, permissions) => {
    try {
        if (roleName == 'seller' || roleName == 'customer' || roleName == 'patner' || roleName == 'admin') {
            let roleCheck = await roleModel.exists({ roleName })
            if (roleCheck) {
                return { status: false, message: "please choose another role name", data: {} }
            }
        }
        const roleId = randomBytes(4).toString('hex')
        const formattedData = {
            userId: userId,
            roleId: roleId,
            roleName: roleName,
            permissions: permissions,
        }
        const saveData = await roleModel(formattedData);
        return saveData.save() ? { status: true, message: "role added", data: {} } : { status: false, message: "role not added", data: {} };
    } catch (error) {
        return { status: false, message: error.message, data: {} }
    }
}
exports.changeRole = async (roleId, permission) => {
    try {
        const formattedData = customRoleFormater(permission)
        console.log(formattedData);
        let a = await roleModel.findOneAndUpdate({ roleId }, {permission:formattedData});
        console.log(a);
        return { status: true, message: "role updated", data: {} }
    } catch (error) {
        return { status: false, message: error.message, data: {} }
    }
}
exports.removeRole = async (roleId) => {
    try {
        const changeRole = await roleModel.findOneAndUpdate({ roleId }, { isActive: true });
        return changeRole ? true : false;
    } catch (error) {
        return false;
    }
}
exports.getUserRole = async (userId) => {
    try {
        const userRole = await roleModel.find({ userId });
        return userRole[0] ? { status: true, message: "role list", data: userRole } : { status: false, message: "no roles found for this user", data: {} };
    } catch (error) {
        return { status: false, message: error.message, data: {} };
    }
}
exports.getDefaultRoleId = async (roleName) => {
    try {
        const roleData = await roleModel.findOne({ roleName }).select('-_id roleId')
        return roleData ? roleData.roleId : false
    } catch (error) {
        return false
    }
}
exports.getRoleIdByRoleId = async (roleId) => {
    try {
        const roleData = await roleModel.findOne({ roleId })
        return roleData ? responseFormater(true, "", roleData) : responseFormater(false, "role not found")
    } catch (error) {
        return responseFormater(false, error.message)
    }
}

exports.permissionCheck = async () => {

}

let sellerPermissionCheck = async (permissions) => {

}