const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configSchema = new Schema({
    customerAppVersion: {
        type: Number,
        required: true
    },
    merchantAppVersion: {
        type: Number,
        required: true
    },
    partnerAppVersion: {
        type: Number,
        required: true
    },
    marketPlaceStatus: {
        type: Boolean,
        default: false
    },
    databaseVersion: {
        type: Number,
        required: true
    },
    apiVersion: {
        type: Number,
        required: true
    },
    paymentGateway: {
        type: String,
        enum: ["razorpay", "cashfree", "airpay"],
        required: true
    },
    startBannerUrl:{
        type:String,
        required: true
    }
})

const configModel = mongoose.model('config', configSchema);
module.exports = configModel