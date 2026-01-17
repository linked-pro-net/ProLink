import express from "express";

const app = express();
app.get("/",(req,res)=>{
    res.send('hello')
})

app.listen(8000,()=>{
    console.log('server is running on port 8000')
})