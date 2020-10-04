const mongoose = require('mongoose')

const EmailSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    registeredOn:{
        type: Date,
        default: Date.now
    }
})

const Email = mongoose.model('Email',EmailSchema)
module.exports = Email