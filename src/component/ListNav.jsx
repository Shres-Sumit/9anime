import React from 'react'
import { Link } from 'react-router-dom'

const ListNav = ({ title, className, children }) => {
    return (
        <li className={`relative ${className}`}>
            <Link to="" className="block px-4 py-2 hover:bg-purple-950">
                {title}
            </Link>
            {
                children && (
                    <div className="absolute left-full top-0 hidden group-hover/genre:flex flex-col w-32 bg-gray-900 text-white shadow-lg z-20">
                        {children}
                    </div>
                )
            }

        </li>
    )
}

export default ListNav