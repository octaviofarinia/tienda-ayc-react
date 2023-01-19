import '../../index.css';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import CartWidget from '../CartWidget/CartWidget';
import ProfileWidget from '../ProfileWidget/ProfileWidget';
import { classNames } from '../../App';
import { NavLink } from 'react-router-dom';

export const navigation = [
  { name: 'Ropa Hombre', href: '/category/Ropa Hombre', current: false },
  { name: 'Ropa Mujer', href: '/category/Ropa Mujer', current: false },
  { name: 'Electronicos', href: '/category/Electronicos', current: false },
  { name: 'Joyeria', href: '/category/Joyeria', current: false }
];

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/logo_3_agendas.png"
                    alt="Agendas y Cuardernos"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/logo_3_agendas.png"
                    alt="Agendas y Cuardernos"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink
                      key="Inicio"
                      to="/"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )
                      }
                      aria-current={({ isActive }) => (isActive ? 'page' : undefined)}>
                      Inicio
                    </NavLink>
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) => {
                          item.current = isActive;
                          return classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          );
                        }}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <CartWidget cantItems={0} />
                <ProfileWidget />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => {
                      item.current = isActive;
                      return classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      );
                    }}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </NavLink>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;