import taskModel from "../model/taskModel.js";

export const createTask = async (req, res) => {
  const { id, title, description, status } = req.body;

  if (!id || !title || !description || !status) {
    return res.json({ success: false, message: "Input is missing" });
  }

  try {
    const newTask = new taskModel({ id, title, description, status });
    await newTask.save();

    return res.json({ success: true, message: "New task added successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const allTask = await taskModel.find({}, { _id: 0, __v: 0 });

    return res.json({ success: true, allTask });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getSingleTask = async (req, res) => {
  const { id } = req.params;

  try {
    const singleTask = await taskModel.findOne({ id }, { _id: 0, __v: 0 });

    if(!singleTask){
        return res.status(404).json({success: true, message: "Task not Found"})
    }

    return res.json({ success: true, singleTask });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getSingleTaskFilter = async (req, res) => {
  const status = req.query.status;

  try {
    const filterTask = await taskModel.findOne({ [`status.${status}`]: true }, { _id: 0, __v: 0 });

    if(!filterTask){
        return res.status(404).json({success: true, message: "Task not Found"})
    }

    return res.json({ success: true, filterTask });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.json({ success: false, message: "Task not found" });
  }

  try {
    await taskModel.findOneAndUpdate({ id }, req.body, {
      new: true,
    });

    return res.json({
      success: true,
      message: `Task ${id} is updated successfully`,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.json({ success: false, message: "Task not found" });
  }

  try {
    await taskModel.findOneAndDelete({ id });

    res.json({ success: true, message: `Task ${id} is deleted successfully` });
  } catch (error) {
    return res.json({success: true, message: error.message})
  }
};
