const { registerCourse } = require("./controllers/registerCourse");

module.exports = (app) => {
  app.post("/api/register-course", registerCourse);

  return app;
};
