import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5">
            <div className="relative flex gap-7 items-center">
                {/* Hamburger Menu */}
                <div className="relative group">
                    <Link to="#" className="text-6xl text-white hover:text-purple-900">
                        &#8801;
                    </Link>
                    {/* Main Dropdown */}
                    <div className="absolute top-full left-0 hidden group-hover:flex flex-col w-32 py-2 bg-purple-900 text-white rounded-lg mt-1 shadow-lg z-10">
                        <ul className="flex flex-col gap-3 font-semibold">
                            {/* HOME */}
                            <li className="relative">
                                <Link
                                    to=""
                                    className="block px-4 py-2 hover:bg-purple-950"
                                >
                                    HO
                                </Link>
                            </li>

                            {/* GENRES */}
                            <li className="relative group/genre">
                                <Link
                                    to=""
                                    className="block px-4 py-2 hover:bg-purple-950"
                                >
                                    GENRES
                                </Link>
                                {/* Submenu for GENRES */}
                                <div className="absolute left-full top-0 hidden group-hover/genre:flex flex-col w-32 bg-gray-900 text-white shadow-lg z-20">
                                    <p className="px-4 py-2 hover:bg-purple-950 cursor-pointer">
                                        Action
                                    </p>
                                    <p className="px-4 py-2 hover:bg-purple-950 cursor-pointer">
                                        Drama
                                    </p>
                                    <p className="px-4 py-2 hover:bg-purple-950 cursor-pointer">
                                        Comedy
                                    </p>
                                </div>
                            </li>

                            <li>
                                <Link
                                    to=""
                                    className="block px-4 py-2 hover:bg-purple-950"
                                >
                                    TYPE
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to=""
                                    className="block px-4 py-2 hover:bg-purple-950"
                                >
                                    UPDATE
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <img
                    className="w-40 h-12"
                    src="https://9animetv.to/images/logo.png"
                    alt="Logo"
                />
            </div>

            <div>
                <button className="rounded-3xl text-white bg-purple-900 text-lg px-3 py-2 w-28">
                    Sign in
                </button>
            </div>
        </nav>
    );
};

export default Navbar;