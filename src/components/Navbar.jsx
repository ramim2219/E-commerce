import React, { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch,getCartCount}  = useContext(ShopContext);
    return (
        <div className='flex items-center justify-between font-medium py-5 px-6 bg-white'>
            <Link to='/'> 
                <img src={assets.logo} className='w-36' alt="Admin Logo" /> 
            </Link>
            
            <ul className='hidden sm:flex gap-8 text-sm text-gray-700'>
                {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item, idx) => (
                    <NavLink
                        key={idx}
                        to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                        className='flex flex-col items-center gap-1 hover:text-black transition'
                    >
                        <p>{item}</p>
                        <hr className='w-1/2 h-0.5 bg-gray-700 hidden group-hover:block' />
                    </NavLink>
                ))}
            </ul>
            <div className='flex items-center gap-6'>
                <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} alt="Cart" className='w-5 cursor-pointer' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white rounded-full text-[8px] leading-4'>
                        {getCartCount()}
                    </p>
                </Link>
                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    alt="Menu"
                    className='w-5 cursor-pointer sm:hidden'
                />
            </div>

            {/* Sidebar for small screens */}
            <div
                className={`fixed top-0 right-0 bottom-0 bg-white z-40 transition-all duration-300 ${
                    visible ? 'w-full' : 'w-0'
                } overflow-hidden`}
            >
                <div className='flex flex-col h-full text-gray-600'>
                    <div className='flex items-center justify-between p-4 bg-gray-100'>
                        <img
                            src={assets.dropdown_icon}
                            alt="Close"
                            className='h-6 cursor-pointer'
                            onClick={() => setVisible(false)}
                        />
                    </div>
                    <div className='flex flex-col gap-4 p-6'>
                        {['Home', 'Collection', 'About', 'Contact'].map((item, idx) => (
                            <NavLink
                                key={idx}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className='py-2 border-b hover:text-black'
                                onClick={() => setVisible(false)}
                            >
                                {item}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;