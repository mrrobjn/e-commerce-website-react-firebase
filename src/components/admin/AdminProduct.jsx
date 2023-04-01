import React, { useContext } from "react";
import { BrandsContext } from "~/context/BrandsContext";
import { CategoriesContext } from "~/context/CategoriesContext";
import { ProductContext } from "~/context/ProductContext";
import { ToastContainer } from "react-toastify";
import "~~/components/admin/AdminProduct.scss";
const AdminProduct = () => {
  const {products,deleteProduct} = useContext(ProductContext);
  const brands = useContext(BrandsContext);
  const categories = useContext(CategoriesContext);
  
  return (
    <div className="admin-product-container">
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
        <h1>Quản lí sản phẩm</h1>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Ảnh</th>
              <th>Tên</th>
              <th>Giá (vnđ)</th>
              <th>Giảm giá (%)</th>
              <th>Loại</th>
              <th>Hãng</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => {
              const category = categories?.find(
                (category) => category.id === product.data.category_id
              );
              const brand = brands?.find(
                (brand) => brand.id === product.data.brand_id
              );
              return (
                <tr key={product.id}>
                  <td className="image">
                    <img src={product.data.image} alt="" />
                  </td>
                  <td className="title">{product.data.title}</td>
                  <td className="price">{product.data.price}</td>
                  <td className="discount">{product.data.discount}</td>
                  <td className="category">{category.data.name}</td>
                  <td className="brand">{brand.data.name}</td>
                  <td className="action">
                    <button type="button" onClick={()=> deleteProduct(product.id, product.data.title)}><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProduct;
