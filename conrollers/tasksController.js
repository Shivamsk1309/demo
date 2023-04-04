

const getAllTasks = (req,res)=>{
    res.send('get all tasks')
};

const createTask = (req, res) => {
  res.send("created a task");
};

const updateTask = (req, res) => {
  res.send("updated a task");
};

const deleteTask = (req, res) => {
  res.send("task deleted");
};
const getTaskById = (req, res) => {
  res.send("get task by id ");
};


module.exports = {
    getAllTasks, createTask, updateTask, deleteTask,getTaskById 
}