const { Router } = require('express');
const {getAllCourses, getCoursesById, editCourse,createNewCourse, getCourseCategory} = require('../controllers/courses.controllers');

const router = Router();

router.get('/courses', getAllCourses);
router.get('/courses/:id', getCoursesById);
router.get('/courses/category/:id', getCourseCategory);
router.put('/courses/:id', editCourse);
router.post('/courses', createNewCourse);

module.exports = router;