const express = require("express");
const cors = require("cors");

const app = express();

// middlewear
app.use(express.json());
app.use(cors());
const blogRouter = require("./router/blogRouter");

//////===============route

app.use("/blogs", blogRouter);

app.listen(8080, () => {
  console.log("port listening port 8080");
});
