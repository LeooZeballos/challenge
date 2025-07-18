const Task = require('../models/tasks')

exports.getTasks = async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
}

exports.createTask = async (req, res) => {
    const { title, description, status } = req.body;
    const task = await Task.create({ title, description, status })
    res.status(201).json(task);
}

exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    if (typeof MI_CONSTANTE_NUMERICA !== 'number') {
        res.json({"message": "Id inválido"})
    } else {
        const deleted = await Task.destroy({where: {id}});
        if (deleted) {
            res.json({"message": "Deleted task"})
        } else {
            res.json({"message": "Not found"})
        }
    }
}