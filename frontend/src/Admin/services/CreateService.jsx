// import React from "react";
// import Sidebar from "../Sidebar";
// import HeroBar from "../HeroBar";
// import { Link } from "react-router-dom";
// import Loading from "../Loading";
// import useCreateService from "../../hooks/adminHook/adminService/useCreateService";
// const CreateService = () => {
//   const {
//     handleChange,
//     handleCreateSubmit,
//     handleImageChange,
//     preview,
//     loading,
//     navigate,
//     categories
//   } = useCreateService();

//   return (
//     <>
//       <div className="flex gap-2">
//         <Sidebar />
//         <HeroBar>
//           <h1 className="text-[35px] p-2 font-bold">Create Service</h1>
//           <button className="bg-blue-600 w-20 h-10 rounded-xs">
//             <Link to={"/admin/dashboard/services"} className="text-white">
//               Back
//             </Link>
//           </button>

//           <form
//             onSubmit={handleCreateSubmit}
//             className="bg-white p-6 mt-5 rounded-xl shadow-md space-y-4 border border-gray-100"
//           >
//             {/* Package Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Service Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 required
//                 className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 placeholder="e.g. Dreamy Spa Treatment"
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Service Category
//               </label>
//               <select
//                 name="category"
//                 required
//                 className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
//                 onChange={handleChange}

//               >
//                 <option value="">Select a Category</option>
//                 {/* categories comes from your hook */}
//                 {categories &&
//                   categories.map((cat) => (
//                     <option key={cat._id} value={cat._id}>
//                       {cat.name}
//                     </option>
//                   ))}
//               </select>
//             </div>

//             {/* Price */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Price ($)
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 required
//                 className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 placeholder="55"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Minutes
//               </label>
//               <input
//                 type="number"
//                 name="duration"
//                 required
//                 className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 placeholder="60"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Service Description
//               </label>
//               <input
//                 type="text"
//                 name="description"
//                 required
//                 className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 placeholder="e.g. Dreamy Spa Treatment"
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Service Image
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 required
//                 onChange={handleImageChange}
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
//               />
//             </div>

//             {/* Image Preview */}
//             {preview && (
//               <div className="mt-4">
//                 <p className="text-xs text-gray-500 mb-2">Image Preview:</p>
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="w-40 h-40 object-cover rounded-lg border shadow-sm"
//                 />
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div className="flex gap-3 pt-4">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-40 cursor-pointer bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-300"
//               >
//                 {loading ? (
//                   <>
//                     <Loading />
//                   </>
//                 ) : (
//                   "Save"
//                 )}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => navigate("/admin/dashboard/services")}
//                 className="w-30 cursor-pointer bg-red-500 text-gray-100 py-2.5 rounded-lg font-bold hover:bg-gray-300 transition-colors"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </HeroBar>
//       </div>
//     </>
//   );
// };

// export default CreateService;
import React from "react";
import Sidebar from "../Sidebar";
import HeroBar from "../HeroBar";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import useCreateService from "../../hooks/adminHook/adminService/useCreateService";
import { useLang } from "../../components/context/LanguageContext";
const CreateService = () => {
  const { lang } = useLang();
  const fontClass = lang === "kh" ? "font-kantumruy" : "font-josefin";
  const {
    formData,
    handleChange,
    handleLangChange, // ប្រើសម្រាប់ប្តូរភាសា KH, EN, CH
    handleCreateSubmit,
    handleImageChange,
    preview,
    loading,
    navigate,
    categories,
  } = useCreateService();

  return (
    <>
      <div className={`flex gap-2 ${fontClass}`}>
        <Sidebar />
        <HeroBar>
          <div className="flex justify-between items-center p-2">
            <h1 className="text-[35px] font-bold">Create Service</h1>
            <Link
              to={"/admin/dashboard/services"}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Back
            </Link>
          </div>

          <form
            onSubmit={handleCreateSubmit}
            className="bg-white p-6 mt-5 rounded-xl shadow-md space-y-6 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Title (KH)
                </label>
                <input
                  type="text"
                  required
                  value={formData.title.kh}
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ឈ្មោះសេវាកម្ម (ខ្មែរ)"
                  onChange={(e) => handleLangChange(e, "kh", "title")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Title (EN)
                </label>
                <input
                  type="text"
                  required
                  value={formData.title.en}
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Service Name (English)"
                  onChange={(e) => handleLangChange(e, "en", "title")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Title (CH)
                </label>
                <input
                  type="text"
                  required
                  value={formData.title.ch}
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="服务名称 (中文)"
                  onChange={(e) => handleLangChange(e, "ch", "title")}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Description (KH)
                </label>
                <textarea
                  required
                  value={formData.description.kh}
                  className="w-full p-2.5 border border-gray-300 rounded-lg h-24 outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => handleLangChange(e, "kh", "description")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Description (EN)
                </label>
                <textarea
                  required
                  value={formData.description.en}
                  className="w-full p-2.5 border border-gray-300 rounded-lg h-24 outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => handleLangChange(e, "en", "description")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Description (CH)
                </label>
                <textarea
                  required
                  value={formData.description.ch}
                  className="w-full p-2.5 border border-gray-300 rounded-lg h-24 outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => handleLangChange(e, "ch", "description")}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Category
                </label>
                <select
                  name="category"
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                >
                  <option value="">Select a Category</option>
                  {categories &&
                    categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="55"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (Minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="60"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                />
              </div>
              {preview && (
                <div className="flex-shrink-0">
                  <p className="text-xs text-gray-500 mb-2 text-center">
                    Preview:
                  </p>
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-lg border shadow-sm"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <button
                type="submit"
                disabled={loading}
                className="w-40 bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-all disabled:bg-blue-300 flex justify-center items-center"
              >
                {loading ? <Loading /> : "Save Service"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/dashboard/services")}
                className="w-30 bg-red-500 text-white py-2.5 rounded-lg font-bold hover:bg-red-600 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </HeroBar>
      </div>
    </>
  );
};

export default CreateService;
