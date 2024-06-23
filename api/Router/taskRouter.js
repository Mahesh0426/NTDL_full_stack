import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../model/taskModel.js";

//using express router
const taskRouter = express.Router();
// CRUD routes for task
// 2.GET routes | reacd task | fetch the task
taskRouter.get("/", (req, res) => {
  getTasks()
    .then((task) => {
      res.json({
        status: "success",
        data: task,
      });
    })
    .catch((err) => {
      res.json({
        status: "error",
        data: err.message,
      });
    });
});

// 1. POST routes
taskRouter.post("/", (req, res) => {
  //get a task to be creted from task
  const task = req.body;

  //1.create a task to database
  //create a task
  createTask(task)
    .then((createdTask) => {
      res.json({
        status: "success",
        data: createdTask,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || " cannot create task",
      });
    });
});

// 3. PATCH |update routes
taskRouter.patch("/:id", (req, res) => {
  const { id } = req.params;
  const updatedField = req.body;
  //query db to update
  updateTask(id, updatedField)
    .then((updatedTask) => {
      res.json({
        status: "success",
        data: updatedTask,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "cannot update task",
      });
    });
});

// 4. DELETE | delete
taskRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  // query  db to delete
  deleteTask(id)
    .then((deletetask) => {
      res.json({
        status: "success",
        data: deletetask,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "cannot delete task",
      });
    });
});
export default taskRouter;
