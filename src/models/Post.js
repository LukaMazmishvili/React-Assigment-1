const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    timestamp: { type: Number, default: Date.now() },
  },
  { versionKey: false }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = { Post, PostSchema };