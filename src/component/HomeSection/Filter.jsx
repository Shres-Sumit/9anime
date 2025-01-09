import React from 'react';
import { FaFilter } from "react-icons/fa";

const Filter = () => {
    const FilterType = ['Genre', 'Country', 'Season', 'Year', 'Type', 'Status', 'Language', 'Sort'];

    return (
        <div className="min-h-72 bg-[#111] rounded-md flex flex-col overflow-hidden">
            <h1 className="text-xl tracking-tight px-6 py-2 font-semibold">Quick filter</h1>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 p-3 mx-auto w-[92%]">
                {FilterType.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#333] p-4 list-none text-center h-6 text-sm flex items-center justify-center text-gray-400"
                    >
                        <span>{item}</span>
                    </div>
                ))}

                {/* Search bar inside the grid */}
                <div className="col-span-2">
                    <input
                        type="text"
                        className="w-full bg-[#333] rounded-md focus:ring-purple-600 outline-none p-2 placeholder-slate-200 text-sm"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <button className="w-full bg-purple-900 h-12 mt-auto font-medium text-xl leading-loose flex justify-center items-center gap-2">
                <FaFilter />
                <span>Filter</span>
            </button>
        </div>
    );
};

export default Filter;
