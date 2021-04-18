import { RequestHandler, response } from "express";
import studentModal from './model.student';

export const getStudents: RequestHandler = async (req, res) => {
    try {
        const students = await studentModal.find()
        return res.json(students)
    } catch (error) {
        return res.json(error)
    }
}

export const getStudent: RequestHandler = async (req, res) => {
    const student = await studentModal.findById(req.params.id)
    if (!student) {
        return res.status(204).json()
    }
    return res.json(student)
}

export const addStudent: RequestHandler = async (req, res) => {
    const studentFound = await studentModal.findOne({ dni: req.body.dni })
    //console.log(studentFound)
    if (studentFound) {
        return res.status(301).json({ masagge: "El DNI ya esta registrado" })
    }
    const student = new studentModal(req.body)
    const savedStudent = await student.save()
    return res.json(savedStudent);
}

export const updateStudent: RequestHandler = async (req, res) => {
    const student = await studentModal.findByIdAndUpdate(req.params.id, req.body, { new: true }) //new: true "devuelve el dato actualizado, si es false, el dato anterior"
    if (!student) {
        return res.status(204).json()
    }
    return res.json(student)
}

export const deleteStudent: RequestHandler = async (req, res) => {
    const student = await studentModal.findByIdAndDelete(req.params.id)
    if (!student) {
        return res.status(204).json()
    }
    return res.json(student)
}

