import React from 'react';
import heroIllus from "../Assets/illustration-hero.svg"
import {Link} from "react-router-dom";


const Home = () => {
  return (
    <section className='py-4 px-10'>

        <div className='flex flex-col items-center md:flex-row md:items-center space-y-10'>
            <div className='md:w-1/2 space-y-6'>
                <h1 className='text-3xl md:text-5xl font-bold text-gray-800'>A Simple Bookmark <br className='hidden md:block' /> Manager</h1>
                <p className='text-gray-500'>
                    A clean and simple interface to organize your favourite
                    websites. Open a new browser tab and see your sites load 
                    instantly. Try it for free.
                </p>
                <div className='flex space-x-6'>
                    <button className='bg-blue-500 px-4 py-2 text-[.9rem] md:text-[1rem] text-white font-bold rounded-md hover:bg-transparent'>
                        <Link>Get it on Chrome</Link>
                    </button>

                    <button className='shadow-md px-4 py-2 text-[.9rem] md:text-[1rem] text-gray-500 font-bold hover:bg-blue-500'>
                        <Link>Get it on Firefox</Link>
                    </button>
                </div>
            </div>

            <div className='md:w-1/2 z-30'>
                <img src={heroIllus} alt="" className='z-20' />
            </div>

        </div>

    </section>
  )
}

export default Home
