const tasksType=[
    {taskTypeId:'1',taskTypeName:'משימה'},
    {taskTypeId:'2',taskTypeName:'באג'},
]

const tasksList=[
    {taskId:'1',taskTypeId:'1',taskName:"דוח תלמידים",contactTaskId:'123456789',contactTaskName:"תמר לוי",isReady:"false"},
    {taskId:'2',taskTypeId:'2',taskName:"לא מעודכן שהמוצר נגמר במלאי",contactTaskId:'325962306',contactTaskName:"הדסה דרור",isReady:"false"},
    {taskId:'1',taskTypeId:'1',taskName:"דוח מורים",contactTaskId:'123456789',contactTaskName:"נועה דרור",isReady:"false"},
]

//פונקציה שמציגה את כל הרשימות
export .getAllTasks=(req,res)=>{
    res.send(tasksList)
}

//id פונקציה המוחקת משימה לפי ה
export.removeTask=(req,res)=>{
    const id=req.params.id
    const index=tasksList.findIndex(x=>x.id===id)
    tasksList.splice(index,1)
    res.send(tasksList)
}

//id עדכון משימה לפי ה
export.UpDateTask=(req,res)=>{
    const id=req.params.id
    const index=tasksList.findIndex(x=>x.id===id)
    if(index!==-1)
       tasksList[index].isReady=true
}
