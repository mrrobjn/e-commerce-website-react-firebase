import { Link } from "react-router-dom";
import HomeCategoriesCard from "./HomeCategoriesCard";
import '~~/components/HomeCategories.scss'
import { useContext } from "react";
import { ProductContext } from "~/context/ProductContext";
import { CategoriesContext } from "~/context/CategoriesContext";
const HomeCategories = ({
  filterResult,
  setProductFilter,
}) => {
  const products = useContext(ProductContext)
  const categories = useContext(CategoriesContext)
  return (
    <>
      <div className="home-category">
        <Link to="./product">
          <div className="box" onClick={() => setProductFilter(products)}>
            <p>Tất cả</p>
          </div>
        </Link>
        {categories.map((category) => {
          return (
            <HomeCategoriesCard
              category={category}
              filterResult={filterResult} key={category.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomeCategories;
