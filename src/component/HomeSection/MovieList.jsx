import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useMovie } from '../../GlobalContext/FlimFetch'

const MovieList = () => {
    const [displayCount, setDisplayCount] = useState(15)
    const { movieList, isLoading, error } = useMovie()



    const handleSeeMore = () => {
        setDisplayCount(prev => prev + 5)
    }

    if (isLoading) {
        return (
            <div className="container py-8">
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container py-8">
                <div className="text-red-500 text-center">
                    Error: {error}
                </div>
            </div>
        );
    }
    return (
        <>

            <div className="container">
                <h1 className="font-bold text-3xl leading-loose">Recently Updated</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {movieList.slice(0, displayCount).map((movie, index) => (
                        <div
                            key={index}
                            className=" relative flex flex-col items-center p-4 rounded shadow hover:shadow-md transition-shadow"
                        >
                            <div className="w-40 h-56 overflow-hidden rounded-md">
                                <img
                                    className="w-full h-full object-cover"
                                    src={movie.thumbnail}
                                    alt={movie.title}
                                />
                            </div>
                            <div className="mt-2 text-center w-full truncate">
                                {movie.title}
                            </div>
                            <div className='absolute top-4 left-2 z-10 rounded overflow-hidden'>
                                <span className='bg-white text-black px-2 py-1 text-sm font-medium block'>HD</span>
                            </div>
                        </div>
                    ))}
                </div>
                {displayCount < movieList.length && (
                    <div className='flex items-center justify-center mt-4'>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition' onClick={handleSeeMore}>
                            See More
                        </button>
                    </div>
                )}
            </div>

        </>
    )
}

export default MovieList