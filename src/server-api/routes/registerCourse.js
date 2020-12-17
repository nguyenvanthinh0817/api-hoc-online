const express = require("express");
const router = express.Router();

const registerCourse = require("../controllers/registerCourse");

router.post("/resigter-course", registerCourse.postResigterCourse);

module.exports = router;
