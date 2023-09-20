const baseUrlV1Prod = 'https://inventory.fablocdn.com/v1'
const baseUrlV1Stage = 'http://139.59.60.119:9000/v1'
const localhost = 'http://localhost:9000/v1'

exports.addOutletUrl = () => {
    return `${baseUrlV1Prod}/outlet`
}
exports.outletByOutletIdUrl = (outletId) => {
    return `${baseUrlV1Prod}/outlet/single/${outletId}`
}
exports.sellerOutletUrl = (sellerId, mode = 2) => {
    return `${baseUrlV1Prod}/outlet/seller?mode=${mode}&searchId=${sellerId}`
}
exports.allOutletUrl = () => {
    return `${baseUrlV1Prod}/outlet/all`
}
exports.allOutletPaginationUrl = (page, limit) => {
    return `${baseUrlV1Prod}/outlet/all/paginated?page=${page}&limit=${limit}`
}
exports.changeOutletStatusUrl = (outletId) => {
    return `${baseUrlV1Prod}/outlet/status/${outletId}`
}
exports.addDiscountToOutletUrl = () => {
    return `${baseUrlV1Prod}/outlet/discount`
}
exports.removeDiscountFromOutletUrl = () => {
    return `${baseUrlV1Prod}/outlet/discount/remove`
}
exports.outletDiscountUrl = (outletId) => {
    return `${baseUrlV1Prod}/outlet/discount/${outletId}`
}
exports.outletStatUrl = () => {
    return `${baseUrlV1Prod}/outlet/stat`
}
