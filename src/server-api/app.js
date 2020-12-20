const registerCourseRouter = require("./routes/registerCourse");
const cors = require("cors");
const app = (app) => {
  app.use(cors());
  app.use("/api", registerCourseRouter);
};

module.exports = app;
