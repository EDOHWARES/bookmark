import React from 'react';
import {BsPerson} from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";
import {RiLockPasswordFill} from "react-icons/ri";


const Login = () => {
  return (
    <div className='flex bg-blue-500/20 items-center justify-center w-screen h-screen '>
      <div className='bg-black/30 px-8 py-4 rounded-md relative flex flex-col items-center justify-center'>
        <div className='bg-blue-500 absolute top-[-4em] w-32 h-32 rounded-full flex items-center justify-center'>
          <BsPerson className='text-[5rem] text-white' />
        </div>
        <div className='flex items-center mt-[5rem] my-6'>
          <span className='bg-blue-500 p-3'>
            <BsFillPersonFill className='text-white text-xl' />
          </span>
          <span>
            <input type="email" placeholder='Email ID' className='bg-blue-400 p-2 text-xl outline-none placeholder:text-white'/>
          </span>
        </div>
        <div className='flex items-center'>
          <span className='bg-blue-500 p-3'>
            <RiLockPasswordFill className='text-white text-xl' />
          </span>
          <span>
            <input type="password" placeholder='Password' className='bg-blue-400 p-2 text-xl outline-none placeholder:text-white' />
          </span>
        </div>
        <div className='flex items-center text-[.8rem] justify-between w-[100%] mt-8'>
          <div className='flex items-center space-x-2 cursor-pointer'>

          <span><input type="checkbox" checked name="" id="rem" className='accent-blue-500' /></span>
          <label htmlFor='rem'>Remember me?</label>

          </div>

          <div className='cursor-pointer'>
            <p>Forgot password?</p>
          </div>

        </div>
        <div className='absolute bottom-[-3rem] z-0'>
          <button className='bg-black/50 hover:bg-black/40 duration-500 text-white font-bold px-4 py-2 rounded-md text-xl'>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Login
