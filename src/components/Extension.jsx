import React from 'react';
import dots from "../Assets/bg-dots.svg"

const Extension = ({img, name, v}) => {
  return (
    <div className='flex flex-col space-y-2 items-center shadow-2xl w-fit px-4 py-8'>
      <img src={img} alt="" className='w-fit' />
      <h2 className='font-bold text-gray-800'>Add to {name}</h2>
      <p className='text-gray-500'>
        Maximum version {v}
      </p>
      <img src={dots} alt="" className='w-fit pt-6' />
      <button className='bg-blue-500 px-4 py-2 w-fit font-bold text-white rounded-md'>
        Add & Install Extension
      </button>
    </div>
    
  )
}

export default Extension
