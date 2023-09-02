import React from 'react';

const Illustration = ({tab, hd, txt}) => {
  return (
    <div className='flex'>
        <div className='flex flex-col-reverse items-center space-x-6 md:items-center md:flex-row'>
            <div className='md:w-1/2 mt-10 md:mt-0'>
                <img src={tab} alt="" className='z-10 relative' />
            </div>
            <div className='md:w-1/2 flex flex-col space-y-4'>
                <h2 className='text-xl md:text-3xl font-bold text-gray-500'>{hd}</h2>
                <p className='text-gray-500'>
                    {txt}
                </p>
                <button className='bg-blue-500 w-fit px-4 hover:bg-blue-800 duration-500 py-2 rounded-md text-white font-bold'>More Info</button>
            </div>
        </div>
      
    </div>
  )
}

export default Illustration
