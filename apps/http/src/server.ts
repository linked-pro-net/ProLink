import express from "express";


import { prisma } from '@repo/db';


const app = express();
app.get("/", async (req,res)=>{
    res.send('hello')

})

app.listen(8000,()=>{
    console.log('server is running on port 8000')
})