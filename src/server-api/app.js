const registerCourseRouter = require("./routes/registerCourse");

const app = (app) => {
  app.use("/api", registerCourseRouter);
};

module.exports = app;
