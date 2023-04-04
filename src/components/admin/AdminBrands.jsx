import React, { useState } from "react";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { BrandsContext } from "~/context/BrandsContext";
import "~~/components/admin/AdminBrands.scss";
const AdminBrands = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { brands, addBrand, deleteBrand } = useContext(BrandsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBrand(image, name);
    setName("");
  };
  return (
    <div className="admin-brands-container">
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
        <h1>Quản lý thương hiệu</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Logo</label>
            <input
              type="file"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="input-field">
            <label>Tên thương hiệu</label>
            <input
              type="text"
              maxLength="30"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit">Thêm</button>
        </form>
      </div>
      <div className="table-container">
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Logo</th>
                <th>Tên thương hiệu</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {brands?.map((brand, index) => {
                return (
                  <tr key={brand.id}>
                    <td className="index">{index + 1}</td>
                    <td className="logo">
                      <img src={brand.data.image} alt="" />
                    </td>
                    <td className="name">{brand.data.name}</td>
                    <td className="action">
                      <button
                        type="button"
                        onClick={() => deleteBrand(brand.id, brand.data.name)}
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

export default AdminBrands;
