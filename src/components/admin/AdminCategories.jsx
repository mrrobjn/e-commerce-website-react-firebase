import React, { useContext } from "react";
import { CategoriesContext } from "~/context/CategoriesContext";
import "~~/components/admin/AdminCategories.scss";
const AdminCategories = () => {
  const {categories} = useContext(CategoriesContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="admin-categories-container">
      <div className="heading">
        <h1>Quản lý danh mục</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Tên danh mục</label>
          <input type="text" />
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
                    <td>{index + 1}</td>
                    <td>{category.data.name}</td>
                    <td className="action">
                      <button
                        type="button"
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
