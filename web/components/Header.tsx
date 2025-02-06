import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// We know Snipcart will exist on window.
declare global {
  interface Window {
    Snipcart: any;
  }
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    /* 	Snipcart has a cart summary helper when you use the class snipcart-items-count,
     *	however as of version 3.2 this value is not persisted through next/link routing.
     *
     *	The following is a workaround to provide the value across any route changes
     *	as well as full page reloads.
     */
    const snip = window.Snipcart;
    if (snip && snip.store) {
      const initialState = snip.store.getState();
      setCartCount(initialState.cart.items.count);

      // subscribe is triggered when a snipcart action is dispatched, ie: state changes.
      const unsubscribe = snip.store.subscribe(() => {
        const newState = snip.store.getState();
        setCartCount(newState.cart.items.count);
      });

      return () => unsubscribe();
    }
  }, [setCartCount]);

  return (
    <header>
      <div className="relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:space-x-10 sm:px-6 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              href="/"
              className="h-8 w-12 bg-vm-logo bg-contain bg-no-repeat"
            >
              <span className="sr-only">Project Voce Moderna</span>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Link
              href="/"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/database"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Database
            </Link>
            <Link
              href="/creators"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Creators
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              FAQ
            </Link>
            <Link
              href="/resources"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden items-center justify-end sm:flex-1 md:flex lg:w-0">
            <span className="mr-1 h-6 w-6 rounded-full border border-gray-400 bg-gray-100 text-center text-sm leading-normal">
              {cartCount}
            </span>
            <button type="button" className="snipcart-checkout">
              <ShoppingBagIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <Transition
          show={mobileMenuOpen}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100 "
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute inset-x-0 top-0 z-30 origin-top-right p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-12 bg-vm-logo bg-contain bg-no-repeat"></div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    <Link
                      href="/"
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="text-base font-medium text-gray-900">
                        Home
                      </div>
                    </Link>
                    <Link
                      href="/database"
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="text-base font-medium text-gray-900">
                        Database
                      </div>
                    </Link>
                    <Link
                      href="/creators"
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="text-base font-medium text-gray-900">
                        Creators
                      </div>
                    </Link>
                    <Link
                      href="/about"
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="text-base font-medium text-gray-900">
                        About
                      </div>
                    </Link>
                    <Link
                      href="/faq"
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="text-base font-medium text-gray-900">
                        FAQ
                      </div>
                    </Link>
                    <Link
                      href="/contact"
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="text-base font-medium text-gray-900">
                        Contact
                      </div>
                    </Link>
                  </nav>
                </div>
              </div>
              <div
                className="snipcart-checkout px-5 py-6"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                  <span className="mr-1 h-6 w-6 rounded-full border border-gray-400 bg-gray-100 text-center text-sm leading-normal">
                    {cartCount}
                  </span>
                  <ShoppingBagIcon className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
}
