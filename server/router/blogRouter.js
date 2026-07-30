const express = require("express");
const router = express.Router();
const {
  getALLBlog,
  createBlogPost,
  singleBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blogController");

// router.get("/blogs", (req, res) => {
//   console.log("hello");
//   res.send("hello");
// });

router.get("/", getALLBlog);

// router.route("/").get(getALLBlog); // what the difference

router.post("/", createBlogPost);

router.get("/:id", singleBlog);

router.patch("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
