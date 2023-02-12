import React, { useState, Fragment, useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  let [cart, setCart] = useContext(CartContext);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function eliminarDeCarrito(itemEnCarrito) {
    let newCart = { ...cart };
    if (itemEnCarrito.quantity <= 1) {
      newCart.products.splice(cart.products.indexOf(itemEnCarrito), 1);
    } else {
      newCart.products.splice(cart.products.indexOf(itemEnCarrito), 1, {
        ...itemEnCarrito,
        quantity: itemEnCarrito.quantity - 1
      });
    }
    setCart({ ...newCart });
  }

  return (
    <>
      <button
        type="button"
        className="flex flex-row rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={openModal}>
        <span className="sr-only">Ver carrito de compras</span>
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
        <span className="ml-1">
          {cart.products.length !== undefined && cart.products.length !== 0
            ? cart.products.reduce((acc, item) => acc + Number(item.quantity), 0)
            : ''}
        </span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900">
                    Carrito
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {cart.products.length !== undefined && cart.products.length !== 0
                        ? 'Lista de productos del carrito:'
                        : 'El carrito se encuentra vacio'}
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cart.products.map((cartItem) => (
                          <li key={cartItem.id} className="flex py-6">
                            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={cartItem.image}
                                alt={cartItem.title}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <Link to={`/item/${cartItem.id}`}>
                                      {cartItem.title}
                                    </Link>
                                  </h3>
                                  <p className="ml-4">{`$${Number(
                                    (cartItem.price * cartItem.quantity).toFixed(2)
                                  )}`}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {cartItem.category}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Cant. {cartItem.quantity}</p>

                                <div className="flex">
                                  <button
                                    onClick={() => eliminarDeCarrito(cartItem)}
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Eliminar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <hr className="mt-4" />
                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      Cerrar
                    </button>
                    {cart.products.length !== undefined && cart.products.length !== 0 ? (
                      <button
                        type="button"
                        className="justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-black hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                        onClick={closeModal}>
                        Confirmar Compra
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CartWidget;
