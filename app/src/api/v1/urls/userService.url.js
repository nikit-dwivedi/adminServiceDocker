const baseUrlV1Prod = 'https://user.fablocdn.com/v1'
const baseUrlV1Stage = 'http://139.59.60.119:4006/v1'
const localhost = 'http://localhost:4006/v1'

exports.addAuthUrl = () => {
    return `${baseUrlV1Prod}/auth/seller`
}
exports.onboardSellerUrl = () => {
    return `${baseUrlV1Prod}/seller`
}
exports.getAllSellerUrl = () => {
    return `${baseUrlV1Prod}/seller/all`
}
exports.getAllPaginatedSellerUrl = (page,limit) => {
    return `${baseUrlV1Prod}/seller/all/paginated?page=${page}&limit=${limit}`
}
exports.getSellerInfoUrl = (sellerId) => {
    return `${baseUrlV1Prod}/seller/info?searchId=${sellerId}`
}
exports.getAgentSellerUrl = () => {
    return `${baseUrlV1Prod}/seller/agent`
}
exports.yeloUrl = () => {
    return `${baseUrlV1Stage}/seller/yelo`
}