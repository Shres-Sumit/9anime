import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="flex justify-between p-5">
            <div class="relative flex gap-7">
                <div class="relative group">
                    <Link href="#" class="text-6xl text-white hover:text-purple-900 ">&#8801;</Link>
                    <div
                        class="absolute top-full left-0 hidden group-hover:flex flex-col w-32 py-2 bg-purple-900 text-white rounded-lg mt-1">
                        <ul class="flex flex-col gap-3 font-semibold ">
                            <li><a href="" class="block px-4 py-2 hover:bg-purple-950 overflow-hidden">HOME</a></li>
                            <li><a href="" class="block px-4 py-2 hover:bg-purple-950 overflow-hidden">HOME</a></li>
                            <li><a href="" class="block px-4 py-2 hover:bg-purple-950 overflow-hidden">HOME</a></li>

                        </ul>
                    </div>
                </div>

                <img class="w-40 h-12" src="https://9animetv.to/images/logo.png" alt="" />
            </div>
            <div>
                <button class="rounded-3xl text-white bg-purple-900 text-lg px-3 py-2 w-28 ">Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar