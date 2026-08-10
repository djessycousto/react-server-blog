const Blog = ({
  item,
  updateBlog,
  deleteBlog,
  editingBlog,
  recentDateMonth,
  year,
}) => {
  const { id, title, author, blogPost, date } = item;
  const blogMonth = date.split(" ")[0];
  const blogYear = date.split(" ")[1];

  return (
    <>
      <section className="block-post__container ">
        <div className="block-post__container__tag">
          <div>
            {/* not working just archives shown  */}
            {year === blogYear && recentDateMonth === blogMonth ? (
              <p>Recent Post</p>
            ) : (
              <p>Archives Post</p>
            )}
          </div>
          <div className="line"></div>
        </div>
        <article>
          <p className="block-post__container__date">{date}</p>
          <h3 className="block-post__container__title">{title}</h3>
          <p className="block-post__container__author">By {author}</p>
          <p className="block-post__container__post">{blogPost}</p>
          <a className="block-post__container__btn" href="">
            Read more
          </a>
          {/* <button
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
          </button> */}
        </article>
      </section>
    </>
  );
};
export default Blog;
