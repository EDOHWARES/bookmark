import React from 'react';
import Extension from './Extension';
import chrome from "../Assets/logo-chrome.svg";
import firefox from "../Assets/logo-firefox.svg";
import opera from "../Assets/logo-opera.svg";

const Pricing = () => {
  return (
    <div className='flex flex-col space-y-12 px-10 py-4'>
      <div className='flex flex-col space-y-5'>
        <h2 className='text-center font-bold text-3xl text-gray-500'>Download the extension (the price is negotiable)</h2>
        <p className='text-center text-gray-500'>
          We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-around'>
        <Extension 
        img={chrome}
        name="Chrome"
        v="6.5"
        />
        <Extension 
        img={opera}
        name="Chrome"
        v="6.5"
        />
        <Extension 
        img={firefox}
        name="Chrome"
        v="6.5"
        />
      </div>
    </div>
  )
}

export default Pricing
