const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
    userId: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    phone: {
        type: String,
    },
    roleId: {
        type: String
    },
    userType: {
        type: String,
    },
    username: {
        type: String
    },
    isLogin: {
        type: Boolean,
        default: false
    },
})
const authModel = mongoose.model('auth', authSchema);
module.exports = authModel;