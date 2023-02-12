import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../App';

const ItemDetailContainer = ({ products }) => {
  const { itemId } = useParams();
  const item = products.find((item) => item.id == itemId);

  let [cart, setCart] = useContext(CartContext);

  function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);

    if (value === 0) {
      return;
    }

    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  function agregarAlCarrito(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    if (value === 0) {
      return;
    }

    let itemEnCarrito = cart.products.find((item) => item.id == itemId);
    let newCart = { ...cart };

    if (itemEnCarrito) {
      itemEnCarrito.quantity = Number(itemEnCarrito.quantity) + Number(value);
      newCart.products.splice(cart.products.indexOf(itemEnCarrito), 1, itemEnCarrito);
    } else {
      newCart.products.push({ ...item, quantity: value });
    }
    setCart({ ...newCart });
  }

  const starsRating = [];
  for (let index = 0, rating = Math.floor(item.rating.rate); index < 5; index++) {
    starsRating.push(
      <svg
        key={index}
        fill={rating > index ? 'currentColor' : 'none'}
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
            <div className="flex flex-col md:flex-row">
              <span className="text-2xl font-medium text-white">${item.price}</span>
              <div className="ml-0 mt-2 flex h-10 w-28 rounded border-0 md:ml-auto md:mt-0">
                <div className="relative flex h-10 w-full flex-row rounded-lg bg-transparent">
                  <button
                    onClick={decrement}
                    data-action="decrement"
                    className=" h-full w-1/3 cursor-pointer rounded-l bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700">
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    className="flex w-1/3 items-center bg-gray-300 text-center font-semibold text-gray-700  outline-none hover:text-black focus:text-black  focus:outline-none"
                    name="item-buy-quantity"
                    defaultValue={0}
                  />
                  <button
                    onClick={increment}
                    data-action="increment"
                    className="h-full w-1/3 cursor-pointer rounded-r bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <button
                onClick={agregarAlCarrito}
                className="ml-0 mt-2 flex max-w-xs rounded border-0 bg-blue-500 py-2 px-6 text-white hover:bg-blue-600 focus:outline-none md:mt-0 md:ml-4">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
