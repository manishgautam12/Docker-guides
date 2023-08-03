import express  from "express";
const app=express();
const PORT=8005;

app.get("/",async(req,res)=>{
    res.send("Hello from the docker");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})