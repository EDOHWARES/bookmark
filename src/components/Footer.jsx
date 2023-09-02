import React from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/Assets/logo-bookmark.svg";
import facebook from "/src/Assets/icon-facebook.svg";
import twitter from "/src/Assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className='bg-blue-950 py-4 text-textColor'>
      <div className='flex items-center justify-between md:space-x-10 space-y-6 md:space-y-0 px-10 py-4 flex-wrap'>
        <img src={logo} alt="" className='bg-white' />
        <ul className='flex space-x-4'>
            <li>
                <Link to={"features"}>FEATURES</Link>
            </li>
            <li>
                <Link to={"pricing"}>PRICING</Link>
            </li>
            <li>
                <Link to={"contact"}>CONTACTS</Link>
            </li>
        </ul>
        <ul className='flex space-x-4'>
            <li>
                <img src={facebook} alt="" />
            </li>
            <li>
                <img src={twitter} alt="" />
            </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
