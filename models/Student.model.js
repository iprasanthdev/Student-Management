const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Student', studentSchema)
