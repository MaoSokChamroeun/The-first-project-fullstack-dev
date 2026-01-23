// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const useUpdateService = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     duration: "", // This will store the duration
//     category: "", // This will store the Category ID
//   });

//   const [categories, setCategories] = useState([]);
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 1. Fetch Categories for the Dropdown
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/category");
//         if (res.data.success) {
//           setCategories(res.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // 2. Fetch the Existing Service Data
//   useEffect(() => {
//     if (!id || id === "undefined") return;

//     const fetchService = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/services/${id}`);
//         if (res.data.success) {
//           const item = res.data.data;
//           setFormData({
//             title: item.title,
//             description: item.description,
//             price: item.price,
//             duration: item.duration,
//             category: item.category?._id || item.category || "", 
//           });
//           setPreview(`http://localhost:5000/public/services/${item.image}`);
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };
//     fetchService();
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("price", formData.price);
//     data.append("duration", formData.duration);
//     data.append("category", formData.category); // Sending the ID to the backend
    
//     if (image) {
//       data.append("image", image);
//     }

//     try {
//       const res = await axios.put(`http://localhost:5000/api/services/${id}`, data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (res.data.success) {
//         navigate("/admin/dashboard/services");
//       }
//     } catch (error) {
//       console.error("Update error:", error.response?.data || error.message);
//       alert("Failed to update service");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     formData,
//     categories,
//     handleUpdateSubmit,
//     handleImageChange,
//     handleChange,
//     loading,
//     preview,
//     navigate,
//   };
// };

// export default useUpdateService;


import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const useUpdateService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ១. កែសម្រួល State ឱ្យទៅជា Object សម្រាប់ភាសា
  const [formData, setFormData] = useState({
    title: { kh: "", en: "", ch: "" },
    description: { kh: "", en: "", ch: "" },
    price: "",
    duration: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/category");
        if (res.data.success) {
          setCategories(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // ២. ទាញទិន្នន័យចាស់មកបង្ហាញក្នុង Form
  useEffect(() => {
    if (!id || id === "undefined") return;

    const fetchService = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/services/${id}`);
        if (res.data.success) {
          const item = res.data.data;
          setFormData({
            // ត្រូវប្រាកដថា item.title និង item.description គឺជា object ដែលបានមកពី DB
            title: item.title || { kh: "", en: "", ch: "" },
            description: item.description || { kh: "", en: "", ch: "" },
            price: item.price,
            duration: item.duration,
            category: item.category?._id || item.category || "", 
          });
          setPreview(`http://localhost:5000/public/services/${item.image}`);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchService();
  }, [id]);

  // ៣. បន្ថែម Function សម្រាប់ Handle ភាសា (ដូចក្នុង useCreate)
  const handleLangChange = (e, lang, field) => {
    setFormData({
      ...formData,
      [field]: {
        ...formData[field],
        [lang]: e.target.value
      }
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    
    // ៤. Append ភាសានីមួយៗតាម format "title.en" ដើម្បីឱ្យ Backend ស្រួល Parse
    data.append("title.kh", formData.title.kh);
    data.append("title.en", formData.title.en);
    data.append("title.ch", formData.title.ch);

    data.append("description.kh", formData.description.kh);
    data.append("description.en", formData.description.en);
    data.append("description.ch", formData.description.ch);

    data.append("price", formData.price);
    data.append("duration", formData.duration);
    data.append("category", formData.category);
    
    if (image) {
      data.append("image", image);
    }

    try {
      const res = await axios.put(`http://localhost:5000/api/services/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        navigate("/admin/dashboard/services");
      }
    } catch (error) {
      console.error("Update error:", error.response?.data || error.message);
      alert("Failed to update service");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    categories,
    handleUpdateSubmit,
    handleImageChange,
    handleLangChange, // បញ្ជូនវាទៅ UI ដើម្បីប្រើក្នុង Input
    handleChange,
    loading,
    preview,
    navigate,
  };
};

export default useUpdateService;