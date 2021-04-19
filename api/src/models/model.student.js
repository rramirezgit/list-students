const mongoose = require('mongoose');

const { Schema } = mongoose;


const studentSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        require: true
    },
    lastName: {
        type: String,
        trim: true,
        require: true
    },
    dni: {
        type: Number,
        trim: true,
        require: true,
        unique: true
    },
    avatarUrl: {
        type: String,
        trim: true,
    },
}, {
    versionKey: false, // not __v
    timestamps: true // fecha de creacion y actualizacion
});

module.exports = mongoose.model('students', studentSchema);