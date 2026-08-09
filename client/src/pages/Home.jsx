// import{ }
import Form from "../Form";
import Blogs from "../Blogs";

function Home({
  loading,
  error,
  createBlog,
  editingBlog,
  setEditingBlog,
  fetchData,
  setError,
  items,
  deleteBlog,
  updateBlog,
}) {
  // =====================================
  // JSX
  // =====================================

  return (
    <>
      <section className="intro">
        <h2>Quiet Thoughts.</h2>
        <p>A space for deliberate words, deep focus, and editorial clarity.</p>
      </section>

      {/* Loading message */}
      {loading && <h3>Loading...</h3>}

      {/* Error message */}
      {error && <h3>{error}</h3>}

      {/* Blog Form */}
      <Form
        createBlog={createBlog}
        editingBlog={editingBlog}
        setEditingBlog={setEditingBlog}
        fetchData={fetchData}
        setError={setError}
        loading={loading}
      />

      {/* Blog List */}
      <Blogs items={items} deleteBlog={deleteBlog} updateBlog={updateBlog} />
    </>
  );
}

export default Home;
