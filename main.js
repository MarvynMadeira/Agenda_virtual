const express = require("express");
const router = express.Router();
const { Task } = require("./models.js");


router.post ("/tasks", async (req, res) => {
    const newTask = new Task ({...req.body});
    const insertedTask = await newTask.save ();

    return res.status(201).json(insertedTask);
});

router.get ("/tasks", async (req, res)=>{
    const tasks = await Task.find();

    return res.status(200).json(tasks);
});

router.get ("/tasks/:id", async (req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id);

    return res.status(task ? 200 : 400).json(task || {message: "Task not Found"});
});

router.put ("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const updatedTask = await Task.updateOne({ _id: id }, req.body);

    return res.status(200).json(updatedTask);
});

router.delete ("/tasks/:id", async (req, res) =>{
    const { id } = req.params;
    const deleteTask = await Task.findByIdAndDelete(id);

    return res.status(200).json(deleteTask);
});

module.exports = router;