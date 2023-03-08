import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const HomeCategoriesCard = ({ category, filterResult }) => {
  const [emulatorCategory, setEmulatorCategory] = useState("");
  useEffect(() => {
    const { name } = category.data;
      setEmulatorCategory(name);
  }, []);
  return (
    <>
      <Link to="./product" key={category.id}>
        <div className="box" onClick={() => filterResult(category.id)}>
          <p>{emulatorCategory || <Skeleton />}</p>
        </div>
      </Link>
    </>
  );
};

export default HomeCategoriesCard;
