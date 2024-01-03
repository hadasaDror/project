const express=require('express')
const router=express.Router()

const {getAllTasks,removeTask,UpDateTask}=require("../controllers/tasks")
router.get('/',getAllTasks)
router.delete('/:id',removeTask)
router.post('/:id',UpDateTask)

module.exports=router;
