const db = require('../utils/database');
const Courses = require('./courses.models');
const {DataTypes} = require('sequelize');

const Videos = db.define("videos", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url:{
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

module.exports = Videos;