const db = require('../db.js');

// add new teacher

exports.addTeacher = (teacher, callback) => {
  const sql = `INSERT INTO teachers (full_name, identity_number, phone_number, specialties, has_assistants) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [teacher.full_name, teacher.identity_number, teacher.phone_number,JSON.stringify(teacher.specialties), teacher.has_assistants] ,callback);
}

// get all teachers

exports.getAllTeachers = (callback) => {
  const sql = `SELECT * FROM teachers`;
  db.query(sql, callback);
};

// update teacher

exports.updateTeacher = (id, teacher, callback) => {
  const sql = `UPDATE teachers SET full_name = ?, identity_number = ?, phone_number = ?, specialties = ?, has_assistants = ? WHERE id = ?`;
  db.query(sql, [teacher.full_name, teacher.identity_number, teacher.phone_number, JSON.stringify(teacher.specialties), teacher.has_assistants, id], callback);
};

// delete teacher
exports.deleteTeacher = (id, callback) => {
  const sql = `DELETE FROM teachers WHERE id = ?`;
  db.query(sql, [id], callback);
};