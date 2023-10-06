const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const { chats } = require("./data/data");
const colors = require("colors");
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

dotenv.config();
const app = express();


const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is runing successfully")
});

app.use('/api/user', userRoutes)

mongoose
    .connect(`${process.env.MONGO_URL}`)
    .then(() => {app.listen(PORT, console.log(`Server start on PORT ${PORT}` .yellow.bold)); console.log('Database Connections works!!!'.cyan.underline);})
    .catch((error) => console.log('Connections failed!',error));