const AssistantModel = require('../models/AssistantTeacherModel');

exports.addAssistant = (req, res) => {
    AssistantModel.addAssistant(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Assistant added successfully!", id: result.insertId });
    });
};

exports.getAllAssistants = (req, res) => {
    AssistantModel.getAllAssistants((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.updateAssistant = (req, res) => {
    const { id } = req.params;
    AssistantModel.updateAssistant(id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Assistant updated successfully!" });
    });
};

exports.deleteAssistant = (req, res) => {
    const { id } = req.params;
    AssistantModel.deleteAssistant(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Assistant deleted successfully!" });
    });
};
