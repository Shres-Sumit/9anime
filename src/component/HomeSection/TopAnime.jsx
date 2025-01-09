import React from 'react'
import { useMovie } from '../../GlobalContext/FlimFetch'

const TopAnime = () => {
    const { movieList } = useMovie()
    const topTenMovies = movieList.slice(0, 10);
    console.log(topTenMovies)
    return (
        <div className='mt-7 max-h-3/4 px-6 py-2 flex flex-col bg-[#111]'>
            <div className='flex justify-between text-center items-center'>
                <h1 className='text-xl font-medium cursor-pointer'>Top Anime</h1>
                <div className='flex gap-2'>
                    <h1 className=' text-sm font-medium cursor-pointer'>Today</h1>
                    <h1 className='text-[#555] text-sm font-medium cursor-pointer'>Week</h1>
                    <h1 className='text-[#555] text-sm font-medium cursor-pointer'>Month</h1>
                </div>
            </div>
            <div className='w-full max-w-md bg-[#111] p-4 rounded-lg'>
                {topTenMovies.map((movie, index) => (
                    <div
                        key={index}
                        className={`relative ${index === 0 ? 'mb-6' : 'flex items-center space-x-4 p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200'}`}
                    >
                        {
                            index === 0 ? (
                                <>
                                    <div className="absolute top-2 left-2 w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold text-xl">
                                        {index + 1}
                                    </div>
                                    <img src={movie.thumbnail} alt={movie.title} className="w-full h-48 object-cover rounded-lg mb-2" />
                                    <div className="mt-2">
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-white font-medium text-lg">{movie.title}</h3>
                                            <span className="text-gray-400">({movie.year})</span>
                                        </div>
                                    </div>
                                </>
                            ) : (<>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl font-bold text-gray-400 w-6">
                                        {index + 1}
                                    </span>
                                    <img
                                        src={movie.thumbnail}
                                        alt={movie.title}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="flex items-center space-x-2 flex-cols">
                                        <h3 className="text-white font-normal text-md">{movie.title}</h3>
                                        <div className="text-gray-400 text-sm">({movie.year})</div>
                                    </div>
                                </div>
                            </>
                            )
                        }
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TopAnime