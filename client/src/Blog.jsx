const Blog = ({ item, updateBlog, deleteBlog, editingBlog }) => {
  const { id, title, author, blogPost } = item;
  return (
    <>
      <section className="block-post__container ">
        <div className="block-post__container__tag">
          <div>
            <p>Recent Post</p>
          </div>
          <div className="line"></div>
        </div>
        <article>
          <p className="block-post__container__date">JANUARY 14, 2026</p>
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
