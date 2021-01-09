// Create products model 
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    unique: "Product already exists!",
    required: "Title is required!",
  },
  description: {
    type: String,
    trim: true,
    required: "Description is required!",
  },
  price: {
    type: String,
    required: "Price is required!",
  },
  category: {
    type: String,
    required: "Category is required!",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

export default mongoose.model("Product", ProductSchema);
