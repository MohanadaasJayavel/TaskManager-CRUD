
const Task = require('../models/task');

exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTasks = async (req, res) => {
  try {
    const taskIds = req.body.ids; 
    await Task.deleteMany({ _id: { $in: taskIds } });
    res.status(200).json({ message: 'Tasks deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
