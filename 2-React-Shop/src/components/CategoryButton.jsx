import React from "react";

const CategoryButton = ({ category, current }) => {
  return (
    <p className={`border text-nowrap border-black p-2 ${current && "bg-black text-white"}`}>
      {category}
    </p>
  );
};

export default CategoryButton;
