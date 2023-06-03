//seller feature

const { forbidden, unauthorized } = require("../helpers/response_helper")
const { getRoleIdByRoleId } = require("../helpers/role.helper")
const { parseJwt } = require("./authToken")

exports.sellerViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.seller.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }

}
exports.sellerAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.seller.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.sellerEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.seller.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.sellerDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.seller.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}

//customer feature

exports.customerViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.customer.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.customerAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.customer.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.customerEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.customer.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.customerDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.customer.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}

////partner feature

exports.partnerViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.partner.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.partnerAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.partner.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.partnerEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.partner.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.partnerDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.partner.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}

////employ feature

exports.employViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.employ.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.employAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.employ.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.employEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.employ.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.employDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.employ.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}

////outlet feature

exports.outletViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.outlet.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.outletAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.outlet.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.outletEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.outlet.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.outletDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.outlet.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}

////product feature

exports.productViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.product.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.productAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.product.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.productEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.product.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.productDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.product.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}

////transaction feature

exports.transactionViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.transaction.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.transactionAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.transaction.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.transactionEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.transaction.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.transactionDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.transaction.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}

////order feature

exports.orderViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.order.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.orderAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.order.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.orderEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.order.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.orderDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.order.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}

////role feature

exports.roleViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.role.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.roleAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.role.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.roleEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.role.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.roleDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.role.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}

////manager feature

exports.managerViewCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.manager.view) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.managerAddCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.manager.add) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.managerEditCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.manager.edit) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}
exports.managerDeleteCheck = async (req, res, next) => {
    try {
        const token = parseJwt(req.headers.authorization)
        const { status, data } = await getRoleIdByRoleId(token.roleId)
        if (!status) {
            return unauthorized(res, "authentication credentials not found",)
        }
        if (!data.permissions.manager.delete) {
            return forbidden(res, "not enough permission",)
        }
        next()
    } catch (error) {
        return unauthorized(res, "authentication credentials not found",)
    }
}