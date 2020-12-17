const express = require("express");
const router = express.Router();

const registerCourse = require("../controllers/registerCourse");

router.post("/register-course", registerCourse.postResigterCourse);

module.exports = router;
