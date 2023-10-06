const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const usersModel = mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    password: { type: String, trim: true },
    pic: {
      type: String,
      trim: true,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  },
  { timestamp: true }
);

usersModel.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

usersModel.pre('save', async function (next){
  if(!this.isModified){
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
})

const Users = mongoose.model("usersModel", usersModel);

module.exports = Users;
