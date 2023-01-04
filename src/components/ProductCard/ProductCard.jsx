import React from 'react';

const ProductCard = ({ title, image, category, price }) => {
  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/4">
      <a className="relative block h-48 overflow-hidden rounded">
        <img
          alt="ecommerce"
          className="block h-full w-full object-cover object-center"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="mb-1 text-xs tracking-widest text-gray-500">{category}</h3>
        <h2 className="text-lg font-medium text-white">{title}</h2>
        <p className="mt-1">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
