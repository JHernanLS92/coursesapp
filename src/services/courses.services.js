const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Courses.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async courseWithCategories(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        attributes: ["title", "description", "instructor"],
        include: [
          {
            model: Categories,
            attributes: ["name"],
            as: "courseCategory",
          },
           {
            model: Videos,
            attributes: ["title", "url"],
            as: "courseVideo",
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async postCourse(course) {
    try {
      const result = await Courses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateCourse(id, field) {
    try {
      const result = await Courses.update(id, field);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CoursesServices;
