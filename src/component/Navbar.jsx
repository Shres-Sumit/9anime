import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListNav from './ListNav';
import PopupLogin from './PopupLogin';

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
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
                                <ListNav title={'GENRES'} className={'group/genre'}>
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

                <div>
                    <button
                        className="rounded-3xl text-white bg-purple-900 font-semibold text-lg px-3 py-2 w-28"
                        onClick={togglePopup}
                    >
                        Sign in
                    </button>
                </div>
                <PopupLogin showPopup={showPopup} setShowPopup={setShowPopup} togglePopup={togglePopup} />
            </nav>



        </>
    );
};

export default Navbar;
