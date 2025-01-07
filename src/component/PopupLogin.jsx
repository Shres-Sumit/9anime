import React from 'react'

const PopupLogin = ({ showPopup, togglePopup }) => {
    if (!showPopup) return null
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
                <h2 className="text-xl font-bold mb-4">Sign In</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-900 text-white py-2 rounded-lg font-semibold hover:bg-purple-800"
                    >
                        Login
                    </button>
                </form>
                <button
                    className="absolute top-2 right-2 text-gray-500 text-2xl font-semibold hover:text-gray-700"
                    onClick={() => togglePopup(showPopup)}
                >
                    &times;
                </button>
            </div>
        </div>
    )
}

export default PopupLogin