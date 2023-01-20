import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ products }) => {
  const { itemId } = useParams();

  const item = products.find((item) => item.title.trim() == itemId.trim());
  const starsRating = [];
  for (let index = 0, rating = Math.floor(item.rating.rate); index < 5; index++) {
    if (rating > index) {
      starsRating.push(
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="h-4 w-4 text-blue-400"
          viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    } else {
      starsRating.push(
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="h-4 w-4 text-blue-400"
          viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
  }

  return (
    <section className="overflow-hidden bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <img
            alt="ecommerce"
            className="h-64 max-h-96 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
            src={item.image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 className="text-sm tracking-widest text-gray-500">AyC</h2>
            <h1 className="mb-1 text-3xl font-medium text-white">{item.title}</h1>
            <div className="mb-4 flex">
              <span className="flex items-center">
                {starsRating}
                <span className="ml-3">{item.rating.count} Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{item.description}</p>
            <div className="mt-14 mb-5 flex items-center border-b-2 border-gray-800 pb-5"></div>
            <div className="flex">
              <span className="text-2xl font-medium text-white">${item.price}</span>
              <button className="ml-auto flex rounded border-0 bg-blue-500 py-2 px-6 text-white hover:bg-blue-600 focus:outline-none">
                Comprar
              </button>
              <button className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-800 p-0 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="h-5 w-5"
                  viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
