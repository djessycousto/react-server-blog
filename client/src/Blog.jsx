const Blog = ({ item, updateBlog, deleteBlog, editingBlog }) => {
  const { id, title, author, blogPost } = item;
  return (
    <>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{blogPost}</p>

      <button
        type="button"
        onClick={() => {
          updateBlog(id);
        }}
      >
        {" "}
        Edit{" "}
      </button>
      <button
        type="button"
        onClick={() => {
          deleteBlog(id);
        }}
      >
        {" "}
        delete
      </button>
    </>
  );
};
export default Blog;
