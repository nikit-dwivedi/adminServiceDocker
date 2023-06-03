const { customerFormatter } = require('../formatter/auth.format');
const { responseFormater } = require('../formatter/response.format');
const { customerRole } = require('../formatter/role.format');
const authModel = require('../models/auth.model');
const customerModel = require('../models/customer.model');


exports.onboardCustomer = async (userId, bodyData) => {
    try {
        const userCheck = await customerModel.exists({ userId: userId })
        if (userCheck) {
            return { status: false, message: "customer already onboarded" }
        }
        const formattedData = customerFormatter(userId, bodyData);
        const saveData = await customerModel(formattedData);
        // const customerPermission = customerRole()
        await markUserOnboarded(userId, "customer");
        return await saveData.save() ? { status: true, message: "succesfully onboarded" } : { status: false, message: "please provide proper fields" };
    } catch (error) {
        console.log("=========helper", error);
        return { status: false, message: "please provide proper fields" }
    }
}
exports.addNewAddress = async (userId, addressData) => {
    try {
        addressData.location = {
            'type': 'Point',
            'coordinates': [parseFloat(addressData.longitude), parseFloat(addressData.latitude)]
        }
        const addAddress = await customerModel.findOneAndUpdate({ userId }, { $push: { addressList: addressData } })
        return addAddress ? { status: true, message: "address added successfully" } : { status: false, message: "address not added" };
    } catch (error) {
        return { status: false, message: "please provide proper fields" }
    }
}
exports.removeAddress = async (userId, addressId) => {
    try {
        const retailData = await customerModel.updateOne(
            { userId: userId },
            { $pull: { "addressList": { _id: addressId } } }
        );
        return retailData ? { status: true, message: "address removed successfully" } : { status: false, message: "address not removed" };
    } catch (error) {
        return { status: false, message: "please provide proper fields" }
    }
}
exports.getAddress = async (userId, clientLong, clientLat) => {
    try {
        let mainData = {}
        let checkLong = parseFloat(clientLong)
        let checkLat = parseFloat(clientLat)
        const outletList = await customerModel.aggregate(
            [
                {
                    "$geoNear": {
                        "near": {
                            "type": "Point",
                            "coordinates": [checkLong, checkLat]
                        },
                        "distanceField": "distance",
                        "spherical": true,
                        "maxDistance": 100,
                        "query": { userId: userId },
                        "includeLocs": "location"
                    },
                },
                // { "$unwind": "$addressList" },

                {
                    "$project": {
                        "_id": 0,
                        "location": 1,
                        // "addressList.address":0,
                        "addressList": 1,
                    }
                }
            ])
        if (outletList[0]) {
            mainData = findNearbyAddress(outletList[0].addressList, outletList[0].location)
            delete mainData.location
        }
        return outletList[0] ? responseFormater(true, "here is the address", mainData) : responseFormater(true, "please add new address", {})
    } catch (error) {
        console.log(error);
        return responseFormater(false, error.message, [])
    }
}
exports.customerById = async (userId) => {
    try {
        const customerData = await customerModel.findOne({ userId });
        if (!customerData) {
            return { status: false, message: "customer not found", data: {} }
        }
        return { status: true, message: "customer info", data: customerData }
    } catch (error) {
        return { status: false, message: "something went wrong", data: error }
    }
}
const markUserOnboarded = async (userId, userType) => {
    try {
        // let query = {}
        // if (userType === "customer") {
        //     query = { isClientOnboarded: true }
        // }
        // else if (userType === "seller") {
        //     query = { isSellerOnboarded: true }
        // }
        // else if (userType === "patner") {
        //     query = { isPatnerOnboarded: true }
        // }
        await authModel.findOneAndUpdate({ userId: userId }, { isClientOnboarded: true })
        return true
    } catch (error) {
        return false
    }
}

const findNearbyAddress = (addressList, matchLocation) => {
    let returnData = {}
    addressList.forEach(element => {
        if (parseFloat(element.location.coordinates[0]) == matchLocation.coordinates[0] && parseFloat(element.location.coordinates[1]) == matchLocation.coordinates[1]) {
            returnData = element
        }
    });
    delete returnData.location
    return returnData
}