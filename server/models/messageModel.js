const mongoose = require("mongoose");

const messageModel = mongoose.Schema(
  {
    sended: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  { timestamp: true }
);

const Message = mongoose.model("messageModel",messageModel);

module.exports = Message;
