import axios from "axios";
import { useState } from "react";

const useDeleteCategory = () => {
  const [loading, setLoading] = useState(false);
  const deleteCategory = async (id, callback) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      setLoading(true);
      const res = await axios.delete(`http://localhost:5000/api/category/${id}`);
      if (res.data.seccess || res.data.success) {
        alert("Deleted successfully");
        if (callback) callback();
      }
    } catch (error) {
      console.error("Delete error", error);
      alert("Failed to delete category");
    } finally {
      setLoading(false);
    }
  };

  return { deleteCategory, loading };
};

export default useDeleteCategory;