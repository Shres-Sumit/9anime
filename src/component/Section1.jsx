import React from 'react'

const Section1 = () => {
    return (
        <section class="flex flex-col items-center justify-center  h-96 mt-1 max-w-xl mx-auto">
            <div>
                <img class="w-44 h-16  " src="https://9animetv.to/images/logo.png" alt="" />
            </div>
            <div class="w-full mt-12">
                <div class="flex items-center gap-2 w-full">
                    <div class="flex w-full rounded-lg overflow-hidden mb-6">
                        <input type="text"
                            class="bg-gray-800 text-white h-14 px-4 py-2 border-0 outline-none focus:outline-none active:outline-none flex-grow text-lg font-normal tracking-wide"
                            placeholder="Enter anime name... " />
                        <button class="text-white bg-purple-900 px-6 py-2   focus:outline-none active:outline-none">
                            <i class="fas fa-search font-medium text-xl"></i>
                        </button>
                    </div>
                </div>
                <div>
                    <span class=" flex justify-center text-gray-300">9anime.to - Just a better place to watch
                        anime
                        online for
                        free!</span>
                </div>
            </div>
            <div class="mt-12 w-60">
                <div class="text-purple-700 tracking-wide font-medium flex justify-center"><i class="fab fa-twitter"></i>
                    Connect with us in
                    twitter</div>
                <div class="flex justify-center bg-purple-900 rounded px-5 py-[15px] mt-5 text-xl tracking-wide ">
                    <a href="" class="text-white">Go to home page</a>

                </div>
            </div>
        </section>
    )
}

export default Section1