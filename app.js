const express=require("express")
const taskRouter=require('./routers/task')
const app=express()

const middleware=(req,res,next){
    console.log(`Logged ${req.url} ${req.method}`);
    next();
}
app.use('./.....................
++++++++++++++++++++++++++',taskRouter)
app.listen(8000,()=>{
    console.log("port 8000");
})