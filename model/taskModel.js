import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    "id": {type: Number, required: true},
    "title": {type: String, required: true},
    "description": {type: String, required: true},
    "status": {
        "pending": {type: Boolean, default: true},
        "inProgress": {type: Boolean, default: false},
        "done": {type: Boolean, default: false},
    },
    createdAt: { type: Date, default: Date.now }
})

const taskModel = mongoose.models.task || new mongoose.model("task", taskSchema);

export default taskModel;
