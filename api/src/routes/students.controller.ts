import { RequestHandler } from "express";
import studentModal from './model.student';

export const getStudents: RequestHandler = (req, res) => {
    res.json('getting students')
}

export const getStudent: RequestHandler = (req, res) => {
    res.json('getting One student')
}

export const addStudent: RequestHandler = async (req, res) => {
    const studentFound = await studentModal.findOne({ dni: req.body.dni })
    //console.log(studentFound)
    if (studentFound) {
        return res.status(301).json({ masagge: "El DNI ya esta registrado" })
    }
    const student = new studentModal(req.body)
    const savedStudent = await student.save()
    res.json(savedStudent);
}

export const updateStudent: RequestHandler = (req, res) => {
    res.json('update student')
}

export const deleteStudent: RequestHandler = (req, res) => {
    res.json('delete student')
}

