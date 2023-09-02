import React from 'react';
import logo from "../Assets/logo-bookmark.svg";
import {Link} from "react-router-dom";
import hamburger from "../Assets/icon-hamburger.svg";
import closeIcon from "../Assets/icon-close.svg";


const Header = () => {

    const [dispMNav, setDispMNav] = React.useState(false)

    const showMNav = () => {
        setDispMNav((dispMNav) => {
            return true
        })
    }

    const hideMNav = () => {
        setDispMNav(() => {
            return false
        })
    }

    const [navSign, setNavSign] = React.useState(false)
  return (
    <header className='flex justify-between items-center py-4 px-10'>


        <div>
            <img src={logo} alt="" />
        </div>

        <nav className='hidden md:block'>
            <ul className='flex items-center text-gray-500 space-x-8'>
                <li>
                    <Link to={"/"}>HOME</Link>
                </li>
                <li className='hover:text-black duration-500'>
                    <Link to={"features"}>FEATURES</Link>
                </li>

                <li className='hover:text-black duration-500'>
                    <Link to={"pricing"}>PRICING</Link>
                </li>

                <li className='hover:text-black duration-500'>
                    <Link to={"contact"}>CONTACT</Link>
                </li>

                <li className='bg-red-600 text-white px-4 py-2 cursor-pointer rounded-md font-bold hover:bg-red-800 duration-500'>
                    <Link to={"login"}>LOGIN</Link>
                </li>
            </ul>
        </nav>

        <div className='md:hidden cursor-pointer' onClick={showMNav}>
            <img src={hamburger} alt="" />
        </div>

        <nav className={`absolute ${dispMNav ? "block" : "hidden"}  md:hidden h-screen w-screen top-0 left-0 bg-blue-950/95 z-50`}>
            <div className='py-2 px-4 flex items-center justify-between'>
                <img src={logo} alt="" className='bg-white' />
                <div className='cursor-pointer' onClick={hideMNav}>
                    <img src={closeIcon} alt="" />
                </div>
            </div>
            <ul className='text-center w-[100%] flex flex-col space-y-6 mt-10 text-xl px-4 text-textColor'>
                <li className='border-t border-gray-500 pt-6' onClick={hideMNav}>
                    <Link to={"/"}>HOME</Link>
                </li>
                <li className='border-t border-gray-500 pt-6' onClick={hideMNav}>
                    <Link to={"features"}>FEATURES</Link>
                </li>
                <li className='border-t border-gray-500 pt-6' onClick={hideMNav}>
                    <Link to={"pricing"}>PRICING</Link>
                </li>
                <li className='border-t border-gray-500 pt-6' onClick={hideMNav}>
                    <Link to={"contact"}>CONTACTS</Link>
                </li>
            </ul>

            <div className='flex items-center justify-center mt-10'>

            <button className='text-center text-textColor text-2xl border-2 px-8 py-2 border-textColor' onClick={hideMNav}>
                <Link to='login'>LOGIN</Link>
            </button>

            </div>
        </nav>
      
    </header>
  )
}

export default Header
