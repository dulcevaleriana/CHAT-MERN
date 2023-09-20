const express = require("express");
const app = express();

app.get("/",(req,res,next)=>{
    res.send("API is runing")
})

app.get("/api/chat",(req,res,next)=>{
    res.send("you're on view /api/chat")
})

app.listen(5000, console.log("Server start on PORT 5000"))