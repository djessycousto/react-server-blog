import { useEffect, useState } from "react";

const Form = ({
  createBlog,
  editingBlog,
  setEditingBlog,
  fetchData,
  setError,
  loading,
}) => {
  // =====================================
  // State
  // =====================================

  const [blogInput, setBlogInput] = useState({
    title: "",
    author: "",
    blogPost: "",
  });

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  // =====================================
  // Helper Functions
  // =====================================

  const resetForm = () => {
    setEditingBlog(null);

    setBlogInput({
      title: "",
      author: "",
      blogPost: "",
    });
  };

  const showSuccess = (message) => {
    setFormSuccess(message);

    setTimeout(() => {
      setFormSuccess("");
    }, 30000);
  };

  const validateForm = () => {
    if (!blogInput.title) {
      setFormError("Title is required.");
      return false;
    }

    if (!blogInput.author) {
      setFormError("Author is required.");
      return false;
    }

    if (!blogInput.blogPost) {
      setFormError("Blog post is required.");
      return false;
    }

    setFormError("");
    return true;
  };

  // =====================================
  // Effects
  // =====================================

  useEffect(() => {
    if (!editingBlog) return;

    setBlogInput(editingBlog);
  }, [editingBlog]);

  // =====================================
  // Event Handlers
  // =====================================

  const handleChange = (e) => {
    setBlogInput({
      ...blogInput,
      [e.target.name]: e.target.value,
    });

    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Stop if validation fails
    if (!validateForm()) return;

    // ==========================
    // EDIT BLOG
    // ==========================

    if (editingBlog) {
      try {
        const resp = await fetch(
          `http://localhost:8080/blogs/${editingBlog.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(blogInput),
          },
        );

        if (!resp.ok) {
          setError("Something went wrong while editing.");
          return;
        }

        await fetchData();

        resetForm();

        showSuccess("Blog updated successfully!");
      } catch (error) {
        setError("Something went wrong while editing.");
      }

      return;
    }

    // ==========================
    // CREATE BLOG
    // ==========================

    try {
      await createBlog(blogInput);
      showSuccess("Blog created successfully!");
      resetForm();
    } catch (error) {
      setError("Something went wrong while creating.");
    }
  };

  // =====================================
  // JSX
  // =====================================

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={blogInput.title}
        onChange={handleChange}
        placeholder="Title"
      />

      <input
        type="text"
        name="author"
        value={blogInput.author}
        onChange={handleChange}
        placeholder="Author"
      />

      <textarea
        name="blogPost"
        value={blogInput.blogPost}
        onChange={handleChange}
        placeholder="Blog post"
      />

      <input
        type="submit"
        value={editingBlog ? "Update" : "Create"}
        disabled={loading}
      />

      {editingBlog && (
        <button type="button" onClick={resetForm}>
          Cancel
        </button>
      )}

      {formError && <div className="message error">{formError}</div>}

      {formSuccess && <div className="message success">{formSuccess}</div>}
    </form>
  );
};

export default Form;
