const { randomBytes } = require('node:crypto');
const { getDefaultRoleId, getRoleIdByRoleId } = require('../helpers/role.helper');
const { encryption } = require('../middlewares/authToken');

module.exports = {
    authFormatter: async (data) => {
        let encryptedPassword
        const userId = randomBytes(4).toString('hex')
        encryptedPassword = await encryption(data.password)
        return {
            userId: userId,
            email: data.email,
            password: encryptedPassword,
            phone: data.phone,
            roleId: data.roleId,
            userType: data.roleName,
            username: data.username
        }
    },
    customerFormatter: (userId, data) => {
        const customerId = randomBytes(4).toString('hex')
        return {
            userId: userId,
            customerId: customerId,
            name: data.name,
        }
    },
    sellerFormatter: (userId, agentId, data) => {
        const sellerId = randomBytes(4).toString('hex')
        return {
            userId: userId,
            sellerId: sellerId,
            
            basicDetails: {
                sellerName: data.sellerName,
                tradeName: data.tradeName,
                sellerType: data.sellerType,
                isGst: data.isGst,
                gstNo: data.gstNo,
                panNumber: data.panNumber,
                phone: data.phone,
            },
            licenseDetails: {
                nameOnlicence: data.nameOnlicence,
                licenceNumber: data.licenceNumber,
                licenceType: data.licenceType,
                licenceImage: data.licenceImage,
                issuedOn: data.issuedOn,
                tenure: data.tenure,
            },
            authorizedPersonDetails: {
                name: data.name,
                pan: data.pan,
                phone: data.phone,
                email: data.email,
            },
            agentId: agentId
        }
    }
}