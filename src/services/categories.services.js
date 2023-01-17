const Categories = require('../models/categories.models');

class CategoriesServices {
static async postCategory(category) {
    try {
      const result = await Categories.create(category);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async dropCategory(id){
    try {
        const result = await Categories.drop(id);
        return result;
    } catch (error) {
        throw error;
    }
  }
}
module.exports = CategoriesServices;