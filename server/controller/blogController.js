const express = require("express");
const { nanoid } = require("nanoid");

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

const getALLBlog = (req, res) => {
  try {
    // res.redirect("/blogs");
    // const param = URLSearchParams; why when
    console.log(req);

    res.status(200).json({ success: true, blogs });
  } catch (error) {
    throw new Error(error);
  }
};

const createBlogPost = async (req, res) => {
  const { title, isCompleted, author, blogPost } = req.body;

  if (!title || !author || !blogPost) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all required fields." });
  }
  // construct new blog

  const newBlog = {
    id: nanoid(),
    title,
    author,
    blogPost,
    isCompleted: false,
  };

  blogs = [...blogs, newBlog]; // why this <- back to blogs

  res.status(200).json({ success: true, newBlog });
};

const singleBlog = async (req, res) => {
  const { id } = req.params;

  blogs = blogs.filter((blog) => {
    return blog.id === id;
  });

  res.status(200).json({ success: true, blogs });
};

const updateBlog = async (req, res) => {
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
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  blogs = blogs.filter((blog) => blog.id !== id);

  res.json({ success: true, blogs, countBlog: blogs.length });
};

module.exports = {
  getALLBlog,
  createBlogPost,
  singleBlog,
  updateBlog,
  deleteBlog,
};
