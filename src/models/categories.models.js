const db = require('../utils/database');
const  Courses = require('./courses.models');
const {DataTypes} = require('sequelize');

const Categories =  db.define("categories", {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
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

module.exports = Categories;