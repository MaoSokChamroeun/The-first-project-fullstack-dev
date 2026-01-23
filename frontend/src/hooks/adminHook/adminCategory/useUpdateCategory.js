import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const useUpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "" } , {path : ""});
  const [loading, setLoading] = useState(false);

  // 1. Fetch the existing data to fill the form
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/category/${id}`);
        if (res.data.success) {
          setFormData(
            { name: res.data.data.name },
            {path : res.data.data.path}
        );
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    if (id) fetchCategory();
  }, [id]);

  // 2. Handle the Update
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send as JSON object
      const res = await axios.put(`http://localhost:5000/api/category/${id}`, {
        name: formData.name,
        path : formData.path
      });

      if (res.data.success) {
        alert("Category updated!");
        navigate("/admin/dashboard/category"); // Redirect after success
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  return { formData, setFormData, handleUpdateCategory, loading };
};

export default useUpdateCategory;