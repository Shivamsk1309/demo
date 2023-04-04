const express = require('express');
const { getAllTasks, updateTask, createTask, deleteTask, getTaskById } = require('../conrollers/tasksController.');
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").patch(updateTask).get(getTaskById).delete(deleteTask);




module.exports = router;