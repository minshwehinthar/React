import React from "react";
import Container from "./Container";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const title = "Product Category";
  const categories = [
    // "all",
    "electronics",
    "jewelery",
    "men clothing",
    "women clothing",
    
  ];
  return (
    <section>
      <Container>
      <h2 className="text-md mb-2 text-gray-400 font-bold">{title}</h2>
      <div className="flex gap-2 overflow-scroll scrollbar-hidden">
          <CategoryButton  category="all" current={true}/>
        {categories.map((category) => (
          <CategoryButton key={category} category={category} current={false}/>
        ))}
      </div>
      </Container>
    </section>
  );
};

export default CategorySection;
