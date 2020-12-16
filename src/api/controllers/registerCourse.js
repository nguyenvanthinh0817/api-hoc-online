const Course = require("../../models/courses.model");
const User = require("../models/User");
module.exports = {
  registerCourse: async (req, res) => {
    const { userId, courseId } = req.body;
    console.log(userId);
    const user = await User.find();

    console.log(user)
    res.json({ user });
  },
};
