const UserServices = require('../services/user.services');

const getAllUsers = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getById(id)
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const getUserCourse = async (req, res) =>{
    try {
        const {id} = req.params;
        const result = await UserServices.getWithCourse(id)
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const createNewUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.postUser(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const  editUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const field = req.body;
        const result = UserServices.updateUser(field,{
            where: {id}
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message); 
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    getUserCourse,
    createNewUser,
    editUser
};