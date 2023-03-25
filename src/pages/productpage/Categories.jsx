import React, { useContext } from "react";
import { CategoriesContext } from "~/context/CategoriesContext";
import { ProductContext } from "~/context/ProductContext";
const Categories = ({ filterResult, setProductFilter }) => {
  const products = useContext(ProductContext);
  const categories = useContext(CategoriesContext);
  return (
    <>
      <div className="category">
        <div className="box" onClick={() => setProductFilter(products)}>
          <p>Tất cả</p>
        </div>
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="box"
              onClick={() => filterResult(category.id)}
            >
              <p>{category.data.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
