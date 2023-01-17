const Courses = require('../models/courses.models');
const Users = require('../models/users.models');

class UserServices {
    static async getAll(){
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getById(id){
        try {
            const result = await Users.findByPk(id, {
                attributes: ["first_name", "last_name", "email"]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getWithCourse(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: ["first_name", "last_name", "email"],
                include: {
                    model: Courses,
                    attributes: ["title"],
                    as:"course"
                }
            });
            return result
        } catch (error) {
            throw error;
        }
    }
    static async postUser(user){
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async updateUser(id, field){
        try {
           const result = await Users.update(id, field);
           return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;