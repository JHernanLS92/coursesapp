const Categories = require('./categories.models');
const Courses = require('./courses.models');
const Users = require('./users.models');
const UsersCourses = require('./usersCourses.models');
const Videos = require('./videos.models');

const initModels = () => {


    UsersCourses.belongsTo(Users, { as: "user", foreignKey: "user_id" });
    Users.hasMany(UsersCourses, { as: "courses", foreignKey: "user_id" });
    UsersCourses.belongsTo(Courses, { as: "courses", foreignKey: "course_id" });
    Courses.hasMany(UsersCourses, { as: "users", foreignKey: "course_id"});

    Categories.belongsTo(Courses, { as: "category", foreignKey: "course_id"});
    Courses.hasMany(Categories, { as: "courseCategory", foreignKey: "course_id" });

    Videos.belongsTo(Courses, { as: "video", foreignKey: "course_id"});
    Courses.hasMany(Videos, { as: "courseVideo", foreignKey: "course_id" });
}

module.exports = initModels;