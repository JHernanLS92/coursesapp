const db =  require('../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.models');
const Courses = require('./courses.models');

const UsersCourses = db.define("usersCourses", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            model: Users,
            key: "id"
        }
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
        references: {
            model: Courses,
            key: "id"
        }
    }
});

module.exports = UsersCourses;