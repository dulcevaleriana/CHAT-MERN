const asyncHandler = require('express-async-handler');
const generateToken = require("../config/generateToken");
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req,res,next) => {
    const {
        name,
        email,
        password,
        pic
    } = req.body;

    if(!name || !email || !password){
        resizeBy.status(400);
        throw new Error("Please enter all the feilds");
    }

    const userExist = await User.findOne({email});

    if(userExist){
        resizeBy.status(400);
        throw new Error("A user already exist with this email");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if(user){
        res.status(200).json({
            message: "user already created",
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        resizeBy.status(400);
        throw new Error("A user cannot be created");
    }
});

const authUser = asyncHandler(async (req,res,next) => {
    const {
        email,
        password
    } = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            message: "user already loged",
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            pic: user.pic,
            token: generateToken(user._id),
        })
    }
})

module.exports = {
    registerUser,
    authUser
}