import { Link } from "react-router-dom";
import HomeCategoriesCard from "./HomeCategoriesCard";
import './HomeCategories.scss'
const HomeCategories = ({
  categories,
  filterResult,
  setProductFilter,
  products,
}) => {
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
