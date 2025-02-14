const TeacherModel = require('../models/TeacherModel');

// add new teacher
exports.addTeacher = (req, res) => {
    TeacherModel.addTeacher(req.body, (err, result) => {
        if(err) return res.status(500).json({error: err.message});
        res.status(201).json({message: 'Teacher added successfully', id: result.insertId});
    });
}

// get all teachers
exports.getAllTeachers = (req, res) => {
    TeacherModel.getAllTeachers((err, result) => {
        if(err) return res.status(500).json({error: err.message});
        res.status(200).json(result);
    });
}

// update teacher
exports.updateTeacher = (req, res) => {
    const { id } = req.params;
    TeacherModel.updateTeacher(id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Teacher updated successfully!" });
    });
};

// delete teacher
exports.deleteTeacher = (req, res) => {
    const { id } = req.params;
    TeacherModel.deleteTeacher(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Teacher deleted successfully!" });
    });
};
