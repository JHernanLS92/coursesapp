const CoursesServices = require('../services/courses.services');


const getAllCourses = async (req, res) => {
    try {
        const result = await CoursesServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const getCoursesById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await CoursesServices.getById(id)
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const getCourseCategory = async (req, res) =>{
    try {
        const {id} = req.params;
        const result = await CoursesServices.courseWithCategories(id)
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const createNewCourse = async (req, res) => {
    try {
        const newCourse = req.body;
        const result = await CoursesServices.postCourse(newCourse);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const  editCourse = async (req, res) =>{
    try {
        const { id } = req.params;
        const field = req.body;
        const result = CoursesServices.updateCourse(field,{
            where: {id}
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message); 
    }
}
module.exports = {
   getAllCourses,
   getCoursesById,
   getCourseCategory,
   createNewCourse,
   editCourse
};
