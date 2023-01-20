import React from 'react';
import { useParams } from 'react-router-dom';
import { navigation } from '../NavBar/NavBar';
import ProductCard from '../ProductCard/ProductCard';

const ItemListContainer = ({ greeting, products }) => {
  const { categoryId } = useParams();

  if (greeting === undefined) {
    greeting = navigation.find((navItem) => navItem.name === categoryId).greeting;
  }

  products = products.filter(
    (product) => categoryId == null || product.category === categoryId
  );

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
