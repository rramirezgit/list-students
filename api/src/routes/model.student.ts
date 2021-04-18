import { Schema, model } from 'mongoose';

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
    email: {
        type: String,
        trim: true,
        require: true
    },
    avatarUrl: {
        type: String,
        trim: true,
    },
}, {
    versionKey: false, // not __v
    timestamps: true // fecha de creacion y actualizacion
});

export default model('students', studentSchema) // nombre del modelo y schema