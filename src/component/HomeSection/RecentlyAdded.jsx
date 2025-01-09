import React from 'react'
import { useMovie } from '../../GlobalContext/FlimFetch';

const RecentlyAdded = () => {
    const { movieList } = useMovie()
    const topTenMovies = movieList.slice(20, 30);
    return (
        <div className='mt-7  px-6 py-2 flex flex-col bg-[#111]'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-medium'>Recently Added</h1>
                <div className='flex '>
                    <button>View All</button>
                </div>
            </div>
            <div className='w-full max-w-md bg-[#111] p-4 rounded-lg'>
                {
                    topTenMovies.map((movie, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center space-x-4 p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200`}
                        >
                            <div className="flex items-center space-x-4">

                                <img
                                    src={movie.thumbnail}
                                    alt={movie.title}
                                    className="w-12 h-12 object-cover rounded"
                                />
                            </div>
                            <div className="flex flex-col flex-1 text-sm">
                                <div className="flex items-center space-x-2 flex-cols">
                                    <h3 className="text-white font-normal ">{movie.title}</h3>
                                    <div className="text-gray-400 text-sm">({movie.year})</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default RecentlyAdded