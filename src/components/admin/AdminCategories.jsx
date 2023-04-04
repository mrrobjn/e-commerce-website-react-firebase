import React, { useContext, useState } from "react";
import { CategoriesContext } from "~/context/CategoriesContext";
import "~~/components/admin/AdminCategories.scss";
import { ToastContainer } from "react-toastify";

const AdminCategories = () => {
  const [name, setName] = useState("");
  const { categories, deleteCategories, addProduct } =
    useContext(CategoriesContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(name);
    setName("");
  };
  return (
    <div className="admin-categories-container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="heading">
        <h1>Quản lý danh mục</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Tên danh mục</label>
          <input
            type="text"
            maxLength="30"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Thêm</button>
        </form>
      </div>
      <div className="table-container">
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên danh mục</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category, index) => {
                return (
                  <tr key={category.id}>
                    <td className="index">{index + 1}</td>
                    <td className="name">{category.data.name}</td>
                    <td className="action">
                      <button
                        type="button"
                        onClick={() => deleteCategories(category.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
