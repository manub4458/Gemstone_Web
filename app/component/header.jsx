"use client"
import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
   <>
   <div>
    <div className='flex justify-around py-4'>
    <div>
        <img src="/logo.png" alt="Logo"
        width={120} height={120}
        />
        
    </div>

    <div className='flex gap-x-6 hel2'
     data-aos="fade-left"
     data-aos-duration="2000"
    >
        <li>HOME</li>
        <li>SHOP</li>
        <li>PRODUCTS</li>
        <li>BLOG</li>
        <li>PAGE</li>
    </div>

    <div className='flex gap-x-6'>
        <img src="/search3.png" alt="search" width={20} height={20} className='w-[25px] h-[25px]' />
        <img src="/user3.png" alt="search" width={20} height={20}   className='w-[25px] h-[25px]' />
        <img src="/heart.png" alt="search" width={20} height={20}   className='w-[25px] h-[25px]' />
        <img src="/cart3.png" alt="search" width={20} height={20}   className='w-[25px] h-[25px]' />

    </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Header