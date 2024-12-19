const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        enum: [ "Office Pendences", "Hobbies", "Fun", "Goals", "Commitments", "Homework", "Tests", "Self-Realization"],
        required: true,
    },
    deadline:{
        type: String,
        required: false,
    },
    priority: {
        type: Boolean,
        default: false,
    },
    finished: {
        type: Boolean,
        default: false,
    },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = { Task };
