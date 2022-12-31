import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartWidget = ({ cantItems }) => {
  console.log(cantItems);
  return (
    <button
      type="button"
      className="flex flex-row rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <span className="sr-only">Ver carrito de compras</span>
      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      <span>{cantItems !== undefined ? cantItems : 0}</span>
    </button>
  );
};

export default CartWidget;
