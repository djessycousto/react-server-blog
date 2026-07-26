const express = require("express");
const { nanoid } = require("nanoid");
const cors = require("cors");

const app = express();

// middlewear
app.use(express.json());
app.use(cors());

let blogs = [
  {
    id: nanoid(),
    title: "First post",
    isCompleted: false,
    author: "Marc",
    blogPost: "just a text to go with ",
  },

  {
    id: nanoid(),
    title: "Second post",
    isCompleted: false,
    author: "Alex",
    blogPost: "just a text to go with ",
  },

  {
    id: nanoid(),
    title: "Third post",
    isCompleted: false,
    author: "Rudy",
    blogPost: "just a text to go with ",
  },
];

//////===============route

app.get("/blogs", (req, res) => {
  res.status(200).json({ success: true, blogs });
});

app.post("/blogs", (req, res) => {
  const { title, isCompleted, author, blogPost } = req.body;
  if (!title || !author || !blogPost) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields.",
    });
  }

  const newBlog = {
    id: nanoid(),
    title,
    author,
    blogPost,
    isCompleted: false,
  };

  blogs = [...blogs, newBlog];

  res.status(200).json({ success: true, newBlog });
});

app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;

  blogs = blogs.filter((blog) => {
    return blog.id === id;
  });

  res.status(200).json({ success: true, blogs });
});

app.patch("/blogs/:id", (req, res) => {
  const { id } = req.params;
  // iscompleted goes here
  const { isCompleted, title, author, blogPost } = req.body; // i meant. this can only be update when check or uncheck, because when create it false to begin with

  if (!title || !author || !blogPost) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields.",
    });
  }

  blogs = blogs.map((blog) => {
    if (blog.id === id) {
      return { ...blog, title, author, blogPost, isCompleted };
    }
    return blog;
  });

  console.log(blogs, "updatred");
  res.json({ success: true, blogs });
});

app.delete("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  blogs = blogs.filter((blog) => blog.id !== id);

  res.json({ success: true, blogs, countBlog: blogs.length });
});

app.listen(8080, () => {
  console.log("port listening port 8080");
});
