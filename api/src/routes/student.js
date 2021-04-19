const express = require('express');
const router = express.Router();
const studentModal = require('../models/model.student');
const path = require('path');
const multer = require('multer');


//Set Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/files'))
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
});

//Configuracion del storage 
const upload = multer({ storage })


router.get('/students', async (req, res) => {
    try {
        const students = await studentModal.find()
        return res.json(students)
    } catch (error) {
        return res.json(error)
    }
});

router.post('/students/newStudent', async (req, res) => {       
    const studentFound = await studentModal.findOne({ dni: req.body.dni })
    if (studentFound) {
        return res.status(301).json({ masagge: "El DNI ya esta registrado" })
    }
    const student = new studentModal(req.body)
    const savedStudent = await student.save()
    return res.json(savedStudent);
});

router.get('/students/:id', async (req, res) => {
    const student = await studentModal.findById(req.params.id)
    if (!student) {
        return res.status(204).json()
    }
    return res.json(student)
});






router.put('/students/:id', upload.single('image'), async (req, res) => {
    const student = await studentModal.findByIdAndUpdate(req.params.id, req.body, { new: true }) //new: true "devuelve el dato actualizado, si es false, el dato anterior"
    if (!student) {
        return res.status(204).json()
    }
    return res.json(student)
});

router.delete('/students/:id', async (req, res) => {
    const student = await studentModal.findByIdAndDelete(req.params.id)
    if (!student) {
        return res.status(204).json()
    }
    return res.json(student)
});

module.exports = router;