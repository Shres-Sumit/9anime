import React from 'react'
import Caursol from './HomeSection/Caursol'
import MovieList from './HomeSection/MovieList'

const BodyPart = () => {
    return (
        <div className='w-full px-5 flex '>
            <div className='flex-1 text-white'>
                <Caursol />
                <MovieList />
            </div>
            <div className='w-96 text-white'>
                hello
            </div>

        </div>
    )
}

export default BodyPart