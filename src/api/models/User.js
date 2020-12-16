const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: Number, default: 1 },
    status: { type: Boolean, default: true, required: true },
    coin: { type: Number, default: 2000 },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("users", userSchema);
module.exports = User;
