import Product from "../models/products";

import Categories from '../models/categories';

class ProductController {
  // Method to create
  async store(req, res) {
    const { title, description, price, category } = req.body;

    const Category = await Categories.findOne({ name: category });

    if (Category) {
      const product = await Product.create({
        title,
        description,
        price,
        category,
      });

      return res.json(product);
    } else {
      return res.json("Does not exist category with this name!");
    }
  }
  // Method to show all products
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  }
  // Method to show one product specific by title or category
  async show(req, res) {
    const filter = req.headers;

    if (filter.title) {
      const product = await Product.findOne({ title: filter.title });

      if (product == null) {
        return res.json("Does not exist product with this title!");
      }
      return res.json(product);
    } else if (filter.category) {
      const product = await Product.findOne({ category: filter.category });

      if (product == null) {
        return res.json("Does not exist product with this title");
      }

      return res.json(product);
    } else {
      return res.json("Search error");
    }
  }
  // Method to update one product by id
  async update(req, res) {
    const id_product = req.params.id;

    const { title, description, price, category } = req.body;

    const Category = await Categories.findOne({ name: category });

    if (Category) {
      const product = await Product.findByIdAndUpdate(id_product, {
        title,
        description,
        price,
        category,
      });

      return res.json(product);
    } else {
      return res.json("Does not exist category with this name!");
    }
  }
  // Method to delete one product by id
  async delete(req, res) {
    const id_product = req.params.id;

    await Product.findByIdAndDelete(id_product);

    return res.json("successfully deleted!");
  }
}

export default new ProductController();
