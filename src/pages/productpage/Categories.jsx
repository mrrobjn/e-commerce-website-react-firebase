import React, { useEffect } from "react";
const Categories = ({
  categories,
  filterResult,
  setProductFilter,
  products,
}) => {
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
