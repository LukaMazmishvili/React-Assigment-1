const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, minlength: 1, required: true },
    status: { type: Boolean, default: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  { versionKey: false }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = { Category, CategorySchema };