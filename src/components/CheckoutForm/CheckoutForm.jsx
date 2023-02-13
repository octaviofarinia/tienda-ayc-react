import React, { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../db/firebase';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import { eliminarItemDeCarrito } from '../CartWidget/CartWidget';
import CheckoutConfirmationModal from '../CheckoutConfirmationModal/CheckoutConfirmationModal';

const CheckoutForm = () => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [nroPedido, setNroPedido] = useState('xxxx');

  let [cart, setCart] = useContext(CartContext);

  function eliminarDeCarrito(itemEnCarrito) {
    let newCart = eliminarItemDeCarrito(cart, itemEnCarrito);
    setCart({ ...newCart });
  }

  async function confirmarCompra() {
    const docRef = await addDoc(collection(db, 'carts'), {
      ...cart
    });
    console.log('Document written with ID: ', docRef.id);
    setOpenConfirmation(true);
    setNroPedido(docRef.id);
    setCart({ ...cart, products: [] });
  }

  if (cart.products.length !== undefined && cart.products.length !== 0) {
    return (
      <>
        <section className="relative bg-gray-900 text-gray-400">
          <div className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
            <div className="relative flex flex-col overflow-hidden rounded-lg bg-gray-50 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
              <ul role="list" className="divide-y divide-gray-200">
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
                            <Link to={`/item/${cartItem.id}`}>{cartItem.title}</Link>
                          </h3>
                          <p className="ml-4">{`$${Number(
                            (cartItem.price * cartItem.quantity).toFixed(2)
                          )}`}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{cartItem.category}</p>
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
            <div className="mt-8 flex w-full flex-col md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
              <h2 className="mb-1 text-lg font-medium text-white">Checkout</h2>
              <h2 className="mb-1 text-lg font-medium text-white">
                Total:{' '}
                <span className="font-normal">{`$${Number(
                  cart.products
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)
                )}`}</span>
              </h2>
              <p className="mb-5 leading-relaxed">
                Complete el formulario para finalizar la compra.
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="text-sm leading-7 text-gray-400">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-900"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="text-sm leading-7 text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-900"
                />
                <label
                  htmlFor="email-confirmation"
                  className="text-sm leading-7 text-gray-400">
                  Confirmación Email
                </label>
                <input
                  type="email"
                  id="email-confirmation"
                  name="email"
                  className="w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-900"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="text-sm leading-7 text-gray-400">
                  Aclaraciones
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-900"
                  defaultValue={''}
                />
              </div>
              <button
                onClick={() => confirmarCompra()}
                className="rounded border-0 bg-green-700 py-2 px-6 text-lg font-medium text-white hover:bg-green-600 focus:outline-none">
                Realizar Compra
              </button>
            </div>
          </div>
        </section>
        <CheckoutConfirmationModal
          open={openConfirmation}
          setOpen={setOpenConfirmation}
          nroPedido={nroPedido}
        />
      </>
    );
  } else {
    return (
      <>
        <div className="container mx-auto px-5 py-24">
          <h1 className="mb-20 text-center text-2xl font-medium text-white sm:text-3xl">
            El carrito esta vacio.
          </h1>
        </div>
        <CheckoutConfirmationModal
          open={openConfirmation}
          setOpen={setOpenConfirmation}
          nroPedido={nroPedido}
        />
      </>
    );
  }
};

export default CheckoutForm;
