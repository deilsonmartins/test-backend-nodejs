// Categories controllers

import Categories from "../models/categories";

class CategoriesController {
  // Method to create
  async store(req, res) {
    const { name } = req.body;
    const categories = await Categories.create({
      name,
    });

    return res.json(categories);
  }
  // Method to show all categories
  async index(req, res) {
    const categories = await Categories.find();

    return res.json(categories);
  }
  //Method to delete one categorie by id
  async delete(req, res) {
    const id_categories = req.params.id;

    await Categories.findByIdAndDelete(id_categories);

    return res.json("successfully deleted!");
  }
}

export default new CategoriesController();
