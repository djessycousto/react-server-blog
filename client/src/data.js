import { nanoid } from "nanoid";
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

export default blogs;
