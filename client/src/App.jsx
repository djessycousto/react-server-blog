import { useEffect, useState } from "react";
import Form from "./Form";
import Blogs from "./Blogs";

function App() {
  // =====================================
  // State
  // =====================================

  const [items, setItems] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // =====================================
  // Constants
  // =====================================

  const url = "http://localhost:8080/blogs";

  // =====================================
  // Fetch Blogs
  // =====================================

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        setError("Something went wrong while fetching.");
        return;
      }

      const data = await resp.json();

      setItems(data.blogs);
    } catch (error) {
      setError("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  // =====================================
  // Initial Fetch
  // =====================================

  useEffect(() => {
    fetchData();
  }, []);

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
