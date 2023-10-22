const { Post } = require("../models");

exports.createPost = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const post = await Post.create({ title, description, category });
    return res.send(post);
  } catch (_) {
    return res.status(500).send({ message: "Oops... something went wrong" });
  }
};
