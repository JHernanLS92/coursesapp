const CategoriesServices = require('../services/categories.services');

const createCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await CategoriesServices.postCategory(newCategory);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params;
       const result = CategoriesServices.dropCategory(id)
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
module.exports = {
  createCategory,
  deleteCategory
 };