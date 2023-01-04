import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ItemListContainer = ({ greeting, products }) => {
  return (
    <section className="bg-gray-900 text-gray-400">
      <h1 className="mx-auto w-max pt-10 text-3xl">{greeting}</h1>
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap">
          {products.map((producto) => (
            <ProductCard
              key={producto.id}
              title={producto.title}
              category={producto.category}
              image={producto.image}
              price={producto.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
