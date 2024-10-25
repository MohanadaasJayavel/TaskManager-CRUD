
const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskContoller');

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks', taskController.deleteTasks); 

module.exports = router;
