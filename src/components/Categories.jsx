import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CategoriesContext } from "~/context/CategoriesContext";
import { ProductContext } from "~/context/ProductContext";
import Loading from "~/layout/Loading";
const Categories = ({ filterResult, setProductFilter }) => {
  const {products} = useContext(ProductContext);
  const {categories} = useContext(CategoriesContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    categories.length >= 1 && setLoading(false);
  }, [categories]);
  return (
    <>
      <div
        className="category"
        style={
          loading
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 555
              }
            : null
        }
      >
        {loading ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default Categories;
