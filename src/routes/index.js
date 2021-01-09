// Defining routes
import express from "express";

const routes = express.Router();

import ProductController from "../controllers/ProductController";

import CategoriesController from '../controllers/CategoriesController';

// Routes Products
routes.post('/products', ProductController.store);

routes.get("/products", ProductController.index);

routes.get("/products/search", ProductController.show);

routes.put("/products/:id", ProductController.update);

routes.delete("/products/:id", ProductController.delete);

// Routes categories
routes.post("/categories", CategoriesController.store);
routes.get("/categories", CategoriesController.index);
routes.delete("/categories/:id", CategoriesController.delete);

export default routes;
