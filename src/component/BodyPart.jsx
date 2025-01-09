import React from 'react'
import Caursol from './HomeSection/Caursol'
import MovieList from './HomeSection/MovieList'
import Filter from './HomeSection/Filter'
import TopAnime from './HomeSection/TopAnime'
import RecentlyAdded from './HomeSection/RecentlyAdded'

const BodyPart = () => {
    return (
        <div className='w-full px-5 flex '>
            <div className='flex-1 text-white'>
                <Caursol />
                <MovieList />
            </div>
            <div className='w-96 mx-6 text-white '>
                <Filter />
                <TopAnime />
                <RecentlyAdded />
            </div>

        </div>
    )
}

export default BodyPart