const Course = require("../models/course");
const User = require("../models/user");
const postResigterCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    const course = await Course.findOne({ _id: courseId });
    const user = await User.findOne({ _id: userId });

    if (!user || !course) {
      res.status(400).json({ errors: "errors" });
      return;
    }

    if (course.price > user.coin) {
      res.status(400).json({
        message: "Bạn không đủ coin, vui lòng nạp thêm coin",
        errors: "errors",
      });
      return;
    } else {
      const newCourse = [...course.users];
      const newCoin = user.coin - course.price;

      newCourse.push(user._id.toString());
      await User.findOneAndUpdate({ _id: userId }, { coin: newCoin });
      await Course.findOneAndUpdate({ _id: courseId }, { users: newCourse });

      res.status(200).json({ message: "Đăng kí khoá học thành công" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Lỗi" });
  }
};

module.exports = { postResigterCourse };
