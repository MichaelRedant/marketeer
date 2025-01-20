const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    services: [{ type: String }], // Array van diensten
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
