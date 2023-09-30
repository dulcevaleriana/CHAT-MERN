const mongoose = require("mongoose");

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

const Users = mongoose.model("usersModel", usersModel);

module.exports = Users;
