const mongoose = require('mongoose')
let bankSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama Akun Pemilik Bank Harus diisi!!']
    },
    nameBank: {
        type: String,
        required: [true, 'Nama Bank Harus diisi!!']
    },
    noRekening: {
        type: String,
        required: [true, 'No Rekening Bank Harus diisi!!']
    }
})

module.exports = mongoose.model('Bank', bankSchema)