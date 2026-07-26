import { useEffect, useState } from "react";

const useFetchData = (url) => {
  // =====================================
  // State
  // =====================================

  const [items, setItems] = useState([]);
  //   const [editingBlog, setEditingBlog] = useState(null); // not need
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  return { loading, error, items, fetchData, setError, setIsLoading };
};

export default useFetchData;
