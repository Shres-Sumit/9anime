import React from 'react';

const InputWithIcon = ({ label, type, placeholder, icon }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
                {label}
            </label>
            <div className="relative flex items-center">
                <input
                    type={type}
                    placeholder={placeholder}
                    className="pl-3 pr-10 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
                />
                <span className="absolute right-3 text-gray-500">{icon}</span>
            </div>
        </div>
    );
};

export default InputWithIcon;
