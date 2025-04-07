import React from "react";

const ProductCard = ({
  product: {
    title,
    price,
    image,
    category,
    description,
    rating: { rate },
  },
}) => {
  const currentRate = rate.toFixed(0);

  const stars = [];
  for (let i = 0; i < currentRate; i++) {
    stars.push(
      <span key={i} className="text-yellow-400">
        &#9733;
      </span>
    );
  }
  return (
    <div className="border border-black p-2 h-full">
      <img src={image} className="h-32" alt="" />
      <p className="font-bold line-clamp-1 text-lg">{title}</p>
      {/* <p className="line-clamp-3">{description}</p> */}
      <p className="text-sm text-gray-400">{stars}</p>
      <div className="flex items-end justify-between mt-auto">
        <p className="font-bold">${price}</p>
        <button className="bg-black text-xs text-white p-2">Add Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
