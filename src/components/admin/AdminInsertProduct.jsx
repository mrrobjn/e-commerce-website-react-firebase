import React, { useContext, useState } from "react";
import { BrandsContext } from "~/context/BrandsContext";
import { CategoriesContext } from "~/context/CategoriesContext";
import "~~/components/admin/AdminInsertProduct.scss";
import { ToastContainer } from "react-toastify";
import { ProductContext } from "~/context/ProductContext";

const AdminInsertProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const categories = useContext(CategoriesContext);
  const brands = useContext(BrandsContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [categoryId, setCategoryId] = useState(categories[0]?.id);
  const [brandId, setBrandId] = useState(brands[0]?.id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    addProduct(
      image,
      title,
      price,
      discount,
      categoryId,
      brandId
    );
    setImage("");
    setTitle("");
    setPrice("");
    setDiscount("");
  };
  return (
    <div className="insert-product-container">
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
        <h1>Thêm sản phẩm</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Ảnh</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>
          <div className="input-field">
            <label>Tên</label>
            <input
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label>Gía (VNĐ)</label>
            <input
              type="text"
              required
              pattern="[0-9]+"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label>Phần trăm giảm (%)</label>
            <input
              type="text"
              required
              pattern="[0-9]{2}"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label>Loại hàng</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              {categories?.map((category) => {
                return (
                  <option value={category.id} key={category.id}>
                    {category.data.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-field">
            <label>Thương hiệu</label>
            <select
              value={brandId}
              onChange={(e) => setBrandId(e.target.value)}
            >
              {brands?.map((brand) => {
                return (
                  <option value={brand.id} key={brand.id}>
                    {brand.data.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="submit">Thêm sản phẩm</button>
        </form>
      </div>
    </div>
  );
};

export default AdminInsertProduct;
