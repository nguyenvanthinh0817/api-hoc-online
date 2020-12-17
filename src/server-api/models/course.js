const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    totalLesson: { type: Number, required: true },
    teacher: { type: String, required: true },
    description: String,
    avatar: String,
    lessons: [{ type: String, ref: "lessons" }],
    users: [{ type: String, ref: "users" }],
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Course = mongoose.model("course", courseSchema);

module.exports = Course;
