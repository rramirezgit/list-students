import { Router } from "express";
const router = Router();

import * as controller from './students.controller';

router.get('/students', controller.getStudents);

router.get('/students/:id', controller.getStudent);

router.post('/students/newStudent', controller.addStudent);

router.put('/students/:id', controller.updateStudent);

router.delete('/students/:id', controller.deleteStudent);

export default router