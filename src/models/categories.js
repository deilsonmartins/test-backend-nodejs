// Create categories model 

import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: "Category already exists!",
    required: "Category is required!",
  },

  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

export default mongoose.model("Categories", CategoriesSchema);
