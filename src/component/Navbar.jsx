import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListNav from './ListNav';
import { IoSearch } from "react-icons/io5";
import { FaReddit } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Navbar = () => {
    const location = useLocation()
    const isHome = location.pathname === '/home'

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
                            <ListNav title={'HOME'} className={''} />
                            <ListNav title={'GENRES'} className={'group/genre'} >
                                <p className="px-4 py-2 hover:bg-purple-950 cursor-pointer">
                                    Action
                                </p>
                                <p className="px-4 py-2 hover:bg-purple-950 cursor-pointer">
                                    Drama
                                </p>
                                <p className="px-4 py-2 hover:bg-purple-950 cursor-pointer">
                                    Comedy
                                </p>

                            </ListNav>

                            {/* GENRES */}
                            <ListNav title={'TYPE'} className={''} />
                            <ListNav title={'Update'} className={''} />
                        </ul>
                    </div>
                </div>

                <img
                    className="w-40 h-12"
                    src="https://9animetv.to/images/logo.png"
                    alt="Logo"
                />
            </div>
            <div className='flex items-center gap-4'>
                {
                    isHome && (
                        <div className='flex w-112 px-4 gap-4 box-border'>
                            <div className='relative'>
                                <input
                                    type="text"
                                    placeholder='Enter anime name'
                                    className='w-full h-10 bg-[#333] rounded-md px-4 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600'
                                />
                                <button className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600'>
                                    <IoSearch className='text-xl' />
                                </button>
                            </div>
                            <div className=' flex justify-center items-center gap-4 '>
                                <span className='text-white bg-indigo-500 p-2 rounded-md text-xl '><FaReddit /></span>
                                <span className='text-white  bg-blue-500 p-2 rounded-md text-xl '><FaTelegram /></span>
                                <span className='text-white  bg-red-500 p-2 rounded-md text-xl '><FaTwitter /></span>


                            </div>
                        </div>

                    )
                }
            </div>

            <div>
                <button className="rounded-3xl text-white bg-purple-900  font-semibold text-lg px-3 py-2 w-28">
                    Sign in
                </button>
            </div>
        </nav>
    );
};

export default Navbar;