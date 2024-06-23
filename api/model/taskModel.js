import taskSchema from "../schema/taskSchema.js";
// for making queries

//fetch |read the tasks
export const getTasks = () => {
  return taskSchema.find();
};

//create a task in database
export const createTask = (taskObj) => {
  return taskSchema(taskObj).save();
};

// update a task in database
export const updateTask = (id, updatedField) => {
  return taskSchema.findByIdAndUpdate(id, updatedField, { new: true });
};

// delete a task in database
export const deleteTask = (id) => {
  return taskSchema.findByIdAndDelete(id);
};
