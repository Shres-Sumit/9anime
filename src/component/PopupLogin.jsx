import React from 'react';
import InputWithIcon from './singleComponent/InputWithIcon';
import { FaLock } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const PopupLogin = ({ showPopup, openPopup, closePopup }) => {
    if (!showPopup) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
                <h2 className="text-xl font-bold mb-4">Sign In</h2>
                <form>
                    <InputWithIcon label={'Email'} type='email' placeholder='Enter your email' icon={<IoMdMail />} />
                    <InputWithIcon label={'Password'} type='password' placeholder='Enter your password' icon={<FaLock />} />
                    <div className='mb-4'>
                        <input type="checkbox" className='mr-4 border-none outline-none' />
                        <span className='text-gray-700'>Remember Me</span>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-900 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 mb-4"
                    >
                        Login
                    </button>

                    <div className='flex justify-center'>
                        <span>Don't have an account? <span className='text-purple-900 cursor-pointer hover:underline' onClick={() => openPopup('register')}> Register</span></span>
                    </div>
                </form>
                <button
                    className="absolute top-2 right-2 text-gray-500 text-2xl font-semibold hover:text-gray-700"
                    onClick={closePopup}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default PopupLogin;
