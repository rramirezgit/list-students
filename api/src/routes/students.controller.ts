import { RequestHandler } from "express";

export const getStudents: RequestHandler = (req, res) => {
    res.json('getting students')
}

export const getStudent: RequestHandler = (req, res) => {
    res.json('getting One student')
}

export const addStudent: RequestHandler = (req, res) => {
    res.json('adding student')
}

export const updateStudent: RequestHandler = (req, res) => {
    res.json('update student')
}

export const deleteStudent: RequestHandler = (req, res) => {
    res.json('delete student')
}

