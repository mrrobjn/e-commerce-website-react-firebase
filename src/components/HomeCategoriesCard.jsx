import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "~/context/ProductContext";
const HomeCategoriesCard = ({ category }) => {
  const [emulatorCategory, setEmulatorCategory] = useState("");
  const {filterProduct}=useContext(ProductContext)
  useEffect(() => {
    const { name } = category.data;
      setEmulatorCategory(name);
  }, []);
  return (
    <>
      <Link to="./product" key={category.id}>
        <div className="box" onClick={() => filterProduct(category.id)}>
          <p>{emulatorCategory}</p>
        </div>
      </Link>
    </>
  );
};

export default HomeCategoriesCard;
