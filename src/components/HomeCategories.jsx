import { Link } from "react-router-dom";
import HomeCategoriesCard from "./HomeCategoriesCard";
import "~~/components/HomeCategories.scss";
import { useContext } from "react";
import { ProductContext } from "~/context/ProductContext";
import { CategoriesContext } from "~/context/CategoriesContext";
import Loading from "~/layout/Loading";
import { useEffect } from "react";
import { useState } from "react";
const HomeCategories = ({ filterResult, setProductFilter }) => {
  const [loading, setLoading] = useState(true);
  const products = useContext(ProductContext);
  const {categories} = useContext(CategoriesContext);
  useEffect(() => {
    categories.length>=1 && setLoading(false);
  }, [categories]);
  return (
    <>
      <div
        className="home-category"
        style={
          loading
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : null
        }
      >
        {loading===true ? (
          <Loading/>
        ) : (
          <>
            <Link to="./product">
              <div className="box" onClick={() => setProductFilter(products)}>
                <p>Tất cả</p>
              </div>
            </Link>
            {categories.map((category) => {
              return (
                <HomeCategoriesCard
                  category={category}
                  filterResult={filterResult}
                  key={category.id}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default HomeCategories;
