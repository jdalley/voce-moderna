import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { MenuIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:justify-start sm:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="h-8 w-12 bg-vm-logo bg-no-repeat bg-contain">
                <span className="sr-only">Project Voce Moderna</span>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden sm:flex space-x-10">
            <Link href="/">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </a>
            </Link>
            <Link href="/database">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Database
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </Link>
          </nav>
          <div className="hidden sm:flex items-center justify-end sm:flex-1 lg:w-0">
            <ShoppingBagIcon className="h-6 w-6" />
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
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right sm:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="h-8 w-12 bg-vm-logo bg-no-repeat bg-contain"></div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  <Link href="/">
                    <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div className="text-base font-medium text-gray-900">
                        Home
                      </div>
                    </a>
                  </Link>
                  <Link href="/database">
                    <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div className="text-base font-medium text-gray-900">
                        Database
                      </div>
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div className="text-base font-medium text-gray-900">
                        About
                      </div>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div className="text-base font-medium text-gray-900">
                        Contact
                      </div>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <a
                href="#"
                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
              >
                <ShoppingBagIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
}
