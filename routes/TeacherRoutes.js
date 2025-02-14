const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/TeacherController');

router.post('/teachers', teacherController.addTeacher);
router.get('/teachers', teacherController.getAllTeachers);
router.put('/teachers/:id', teacherController.updateTeacher);
router.delete('/teachers/:id', teacherController.deleteTeacher);

module.exports = router;
