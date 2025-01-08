import React, { useEffect, useState } from 'react'

const Caursol = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        "pic1.jpg",
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <div className="relative w-full mb-9">
                <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
                    {
                        slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'} `}
                            >
                                <img src={slide} className='absolute block w-full  h-full object-cover text-white' alt={`Slide ${index + 1}`} />
                            </div>
                        ))
                    }

                </div>
                <button onClick={prevSlide} className='absolute top-0  left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
                <div className='absolute p-4 bg-purple-900 h-28 text-white bottom-0 w-full flex justify-between items-center'>
                    <div className='flex-1 leading-relaxed'>
                        <h1 className='font-bold text-3xl tracking-tight '>Wind Breaker</h1>
                        <p className='text-xs'>Adaptation of the Hashira Training Arc.
                            The Hashira, the Demon Slayer Corps' highest ranking swordsmen and members. The Hashira Training has begun in order to face the forthcoming battle against Muzan Kibutsuji...</p>
                    </div>
                    <div className='w-48'>
                        <button className=' w-full bg-white text-black px-3 py-4 rounded-full font-bold text-2xl'>Watch now</button>
                    </div>
                </div>
            </div>

        </>



    )
}

export default Caursol