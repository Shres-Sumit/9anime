import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListNav from './ListNav';
import PopupLogin from './PopupLogin';
import PopupRegister from './PopupRegister';

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupType, setPopupType] = useState('login');

    const openPopup = (type) => {
        setPopupType(type);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false)
    }

    return (
        <>
            <nav className="flex justify-between items-center p-5">
                <div className="relative flex gap-7 items-center">

                    <div className="relative group">
                        <Link to="#" className="text-6xl text-white hover:text-purple-900">
                            &#8801;
                        </Link>

                        <div className="absolute top-full left-0 hidden group-hover:flex flex-col w-32 py-2 bg-purple-900 text-white rounded-lg mt-1 shadow-lg z-10">
                            <ul className="flex flex-col gap-3 font-semibold">

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
                        onClick={() => openPopup('login')}
                    >
                        Sign in
                    </button>
                </div>
                {popupType === 'login' ? (
                    <PopupLogin showPopup={showPopup} openPopup={openPopup} closePopup={closePopup} />
                ) : (
                    <PopupRegister showPopup={showPopup} openPopup={openPopup} closePopup={closePopup} />
                )}
            </nav>
        </>
    );
};

export default Navbar;
