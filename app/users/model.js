const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'E-Mail Harus Diisi!!']
    },
    username: {
        type: String,
        required: [true, 'Username Harus Diisi!!']
    },
    name: {
        type: String,
        required: [true, 'Nama Harus Diisi!!']
    },
    password: {
        type: String,
        required: [true, 'Password Harus Diisi!!']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'admin'
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    phoneNumber: {
        type: String,
        required: [true, 'No. Telfon Harus Diisi!!']
    },
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)