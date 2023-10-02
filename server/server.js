const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

dotenv.config();
connectDB();
const app = express();


const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("API is runing successfully")
});

app.get("/api/chat",(req,res)=>{
    res.send(chats);
});

app.get("/api/chat/:id",(req,res)=>{
    const singleChat = chats.find((c)=> c._id === req.params.id);
    res.send(singleChat)
});

app.listen(PORT, console.log(`Server start on PORT ${PORT}` .yellow.bold))