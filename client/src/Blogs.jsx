import Blog from "./Blog";
const Blogs = ({ items, updateBlog, deleteBlog, isEdit }) => {
  return (
    <>
      <h2>Blog area </h2>

      {items.map((item) => {
        return (
          <Blog
            key={item.id}
            item={item}
            updateBlog={updateBlog}
            deleteBlog={deleteBlog}
            isEdit={isEdit}
          />
        );
      })}
    </>
  );
};
export default Blogs;
