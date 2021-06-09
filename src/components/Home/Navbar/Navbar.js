import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='bg-gray-200 lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 sticky top-0'>
            <div className="flex-1 flex justify-between items-center">
                <a href="/" className='font-bold'>Ashraful Mijan</a>
            </div>
            <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
                <svg viewBox="0 0 100 80" width="40" height="25">
                    <rect  width="100" height="15"></rect>
                    <rect  y="30" width="100" height="15"></rect>
                    <rect  y="60" width="100" height="15"></rect>
                </svg>
            </label>
            <input type="checkbox" className="hidden" id="menu-toggle" />

            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <div>
                    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li>
                            <a href="/" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                                Home</a>
                        </li>
                        <li>
                            <a href="/" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                                About</a>
                        </li>
                        <li>
                            <a href="/" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                                Projects</a>
                        </li>
                        <li>
                            <a href="/" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                                Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;