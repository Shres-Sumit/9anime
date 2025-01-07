import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

import InputWithIcon from './singleComponent/InputWithIcon';


const PopupRegister = ({ showPopup, openPopup, closePopup }) => {
    if (!showPopup) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
                <h2 className="text-xl font-bold mb-4">Register</h2>
                <form>
                    <InputWithIcon label={'Name'} type='text' placeholder='Enter your name' icon={<FaUser />} />
                    <InputWithIcon label={'Email'} type='email' placeholder='Enter your email' icon={<IoMdMail />} />
                    <InputWithIcon label={'Password'} type='password' placeholder='Enter your password' icon={<FaLock />} />
                    <InputWithIcon label={' Confirm Password'} type='password' placeholder='Enter your email' icon={<FaLock />} />





                    <button
                        type="submit"
                        className="w-full bg-purple-900 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 mb-4"
                    >
                        Register
                    </button>
                </form>
                <button
                    className="absolute top-2 right-2 text-gray-500 text-2xl font-semibold hover:text-gray-700"
                    onClick={closePopup}
                >
                    &times;
                </button>
                <div className='flex justify-center cursor-pointer'>
                    <span>Have an account? <span className='text-purple-900 hover:underline '>Sign-in</span></span>
                </div>
            </div>
        </div>
    );
};

export default PopupRegister;
