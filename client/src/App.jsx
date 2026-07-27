import { useState } from "react";
import Form from "./Form";
import Blogs from "./Blogs";
import useFetchData from "./useFetch";
import "./variables.css";
import "./globals.css";

// css
import "./globals.css";

function App() {
  // =====================================
  // State
  // =====================================

  const [editingBlog, setEditingBlog] = useState(null);

  // =====================================
  // Constants
  // =====================================

  const url = "http://localhost:8080/blogs";
  const { loading, error, items, fetchData, setError, setIsLoading } =
    useFetchData(url);

  // // =====================================
  // // Fetch Blogs // moved to a custom hook
  // // =====================================

  // =====================================
  // Create Blog
  // =====================================

  const createBlog = async (blogInput) => {
    try {
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogInput),
      });

      if (!resp.ok) {
        throw new Error("Failed to create blog");
      }

      await fetchData();
    } catch (error) {
      setError("Something went wrong while saving.");
      throw error;
    }
  };

  // =====================================
  // Select Blog To Edit
  // =====================================

  const updateBlog = (blogId) => {
    const blog = items.find((item) => item.id === blogId);

    setEditingBlog(blog);
  };

  // =====================================
  // Delete Blog
  // =====================================

  const deleteBlog = async (blogId) => {
    try {
      const resp = await fetch(`${url}/${blogId}`, {
        method: "DELETE",
      });

      if (!resp.ok) {
        throw new Error("Failed to delete blog");
      }

      await fetchData();
    } catch (error) {
      setError("Something went wrong while deleting.");
    }
  };

  // =====================================
  // JSX
  // =====================================

  return (
    <>
      <h2>Welcome to my Blog</h2>

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

export default App;
