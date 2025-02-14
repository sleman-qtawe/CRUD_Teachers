const db = require('../db.js');

// add new assistant teacher

exports.addAssistant = (assistant, callback) => {
  const sql = `INSERT INTO assistant_teachers (full_name, identity_number, phone_number, specialties, supervisor_id) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [assistant.full_name, assistant.identity_number, assistant.phone_number, JSON.stringify(assistant.specialties), assistant.supervisor_id], callback);
}

// get all assistant teacher

exports.getAllAssistants = (callback) => {
  const sql = `SELECT * FROM assistant_teachers`;
  db.query(sql, callback);
};

// update assistant teacher

exports.updateAssistant = (id, assistant, callback) => {
    const sql = `UPDATE assistant_teachers SET full_name = ?, identity_number = ?, phone_number = ?, specialties = ?, supervisor_id = ? WHERE id = ?`;
    db.query(sql, [assistant.full_name, assistant.identity_number, assistant.phone_number, JSON.stringify(assistant.specialties), assistant.supervisor_id, id], callback);
};

// delete assistant teacher
exports.deleteAssistant = (id, callback) => {
    const sql = `DELETE FROM assistant_teachers WHERE id = ?`;
    db.query(sql, [id], callback);
};