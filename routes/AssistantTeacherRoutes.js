const express = require('express');
const router = express.Router();
const assistantController = require('../controllers/AssistantTeachersController');

router.post('/assistants', assistantController.addAssistant);
router.get('/assistants', assistantController.getAllAssistants);
router.put('/assistants/:id', assistantController.updateAssistant);
router.delete('/assistants/:id', assistantController.deleteAssistant);

module.exports = router;
