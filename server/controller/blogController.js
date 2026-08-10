const express = require("express");
const { nanoid } = require("nanoid");

// let blogs = [
//   {
//     id: nanoid(),
//     title: "First post",
//     isCompleted: false,
//     author: "Marc",
//     blogPost: "just a text to go with ",
//   },

//   {
//     id: nanoid(),
//     title: "Second post",
//     isCompleted: false,
//     author: "Alex",
//     blogPost: "just a text to go with ",
//   },

//   {
//     id: nanoid(),
//     title: "Third post",
//     isCompleted: false,
//     author: "Rudy",
//     blogPost: "just a text to go with ",
//   },
// ];

let blogs = [
  {
    id: nanoid(),
    title: "The Art of Slow Living in a Fast Digital World",
    isCompleted: false,
    author: "Eleanor Vance",
    date: "August 18, 2026",
    blogPost:
      "Sustainability isn't just about the environment; it's about our attention. In an era of infinite scroll, choosing what not to look at is the ultimate luxury and a necessary survival skill for the creative mind...",
  },
  {
    id: nanoid(),
    title: "Why I Stopped Chasing Productivity Hacks",
    isCompleted: false,
    author: "Marc Delaney",
    date: "August 7, 2026",
    blogPost:
      "Every app promised to fix my focus, and every app became another thing to manage. The real shift happened when I stopped optimizing and started noticing what I actually wanted to spend time on...",
  },
  {
    id: nanoid(),
    title: "The Quiet Case for Boring Weekends",
    isCompleted: false,
    author: "Alex Renaud",
    date: "March 24, 2026",
    blogPost:
      "Not every hour needs a purpose. There's a kind of clarity that only shows up after a long stretch of doing genuinely nothing — no plan, no content to consume, just space...",
  },
  {
    id: nanoid(),
    title: "On Writing Things Down Before They Disappear",
    isCompleted: false,
    author: "Rudy Ashford",
    date: "April 9, 2024",
    blogPost:
      "Most of my best ideas arrive at inconvenient times and vanish just as fast. Keeping a notebook nearby isn't about discipline — it's about respecting the fact that thoughts are fragile...",
  },
  {
    id: nanoid(),
    title: "The Discipline of Saying No to Good Opportunities",
    isCompleted: false,
    author: "Nadia Osei",
    date: "May 30, 2024",
    blogPost:
      "It's easy to say no to bad ideas. The real skill is turning down decent ones so there's room left for the rare great one — and knowing the difference takes longer than anyone tells you...",
  },

  {
    id: nanoid(),
    title: "The Art of Slow Living in a Fast Digital World",
    isCompleted: false,
    author: "Eleanor Vance",
    date: "January 14, 2024",
    blogPost:
      "Sustainability isn't just about the environment; it's about our attention. In an era of infinite scroll, choosing what not to look at is the ultimate luxury and a necessary survival skill for the creative mind...",
  },
  {
    id: nanoid(),
    title: "Why I Stopped Chasing Productivity Hacks",
    isCompleted: false,
    author: "Marc Delaney",
    date: "February 3, 2024",
    blogPost:
      "Every app promised to fix my focus, and every app became another thing to manage. The real shift happened when I stopped optimizing and started noticing what I actually wanted to spend time on...",
  },
  {
    id: nanoid(),
    title: "The Quiet Case for Boring Weekends",
    isCompleted: false,
    author: "Alex Renaud",
    date: "March 21, 2024",
    blogPost:
      "Not every hour needs a purpose. There's a kind of clarity that only shows up after a long stretch of doing genuinely nothing — no plan, no content to consume, just space...",
  },
  {
    id: nanoid(),
    title: "On Writing Things Down Before They Disappear",
    isCompleted: false,
    author: "Rudy Ashford",
    date: "April 9, 2024",
    blogPost:
      "Most of my best ideas arrive at inconvenient times and vanish just as fast. Keeping a notebook nearby isn't about discipline — it's about respecting the fact that thoughts are fragile...",
  },
  {
    id: nanoid(),
    title: "The Discipline of Saying No to Good Opportunities",
    isCompleted: false,
    author: "Nadia Osei",
    date: "May 30, 2024",
    blogPost:
      "It's easy to say no to bad ideas. The real skill is turning down decent ones so there's room left for the rare great one — and knowing the difference takes longer than anyone tells you...",
  },
  {
    id: nanoid(),
    title: "What Old Forums Understood About the Internet",
    isCompleted: false,
    author: "Tomasz Kowalski",
    date: "July 12, 2024",
    blogPost:
      "Before algorithms decided what we saw, small communities built their own norms and their own pace. There's something worth revisiting in how deliberately those spaces were shaped...",
  },
  {
    id: nanoid(),
    title: "Notes From a Year of Working in Public",
    isCompleted: false,
    author: "Eleanor Vance",
    date: "September 2, 2024",
    blogPost:
      "Sharing unfinished work felt exposing at first. A year in, it's the single habit that's taught me the most — feedback arrives faster when there's nothing polished left to defend...",
  },
  {
    id: nanoid(),
    title: "The Furniture That Outlives Trends",
    isCompleted: false,
    author: "Priya Nair",
    date: "November 18, 2024",
    blogPost:
      "Every few years a new aesthetic tells you to start over. The pieces worth keeping were never chasing a trend in the first place — they were just built well and left alone...",
  },
  {
    id: nanoid(),
    title: "A Short Defense of Doing Things Badly First",
    isCompleted: false,
    author: "Marc Delaney",
    date: "January 22, 2023",
    blogPost:
      "The first draft, the first prototype, the first attempt — none of them need to be good. They need to exist, so the second attempt has something real to react to...",
  },
  {
    id: nanoid(),
    title: "Why We Kept the Corner Shop Instead of Expanding",
    isCompleted: false,
    author: "Rudy Ashford",
    date: "April 5, 2023",
    blogPost:
      "Growth was always framed as the obvious next step. But the shop worked precisely because it was small enough to know every regular by name, and that felt worth protecting...",
  },
  {
    id: nanoid(),
    title: "The Maps We Draw From Memory",
    isCompleted: false,
    author: "Tomasz Kowalski",
    date: "August 30, 2023",
    blogPost:
      "Ask someone to sketch their childhood neighborhood and watch what they leave out. Memory isn't a record — it's a small, quiet act of editing we do without noticing...",
  },
  {
    id: nanoid(),
    title: "On Reading Books You'll Never Finish",
    isCompleted: false,
    author: "Nadia Osei",
    date: "December 11, 2023",
    blogPost:
      "Not every book needs to be finished to matter. Some exist to be dipped into for a single idea, carried around for months, and returned to only when the moment calls for it...",
  },
  {
    id: nanoid(),
    title: "What Handwriting Still Teaches the Hand",
    isCompleted: false,
    author: "Priya Nair",
    date: "March 8, 2022",
    blogPost:
      "Typing is faster, but something about the resistance of pen on paper slows the thought down enough to actually shape it. Speed isn't always the point...",
  },
  {
    id: nanoid(),
    title: "The Neighborhood Before the App Redesigned It",
    isCompleted: false,
    author: "Alex Renaud",
    date: "June 27, 2022",
    blogPost:
      "Before every storefront had a delivery icon, finding a good bakery meant asking a neighbor. Something about that friction made the discovery feel like it actually belonged to you...",
  },
  {
    id: nanoid(),
    title: "A Year Without Buying Anything New",
    isCompleted: false,
    author: "Eleanor Vance",
    date: "October 15, 2022",
    blogPost:
      "The rule was simple and the year was not. What I found wasn't deprivation so much as a strange, specific creativity that only shows up once the easy option is off the table...",
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
