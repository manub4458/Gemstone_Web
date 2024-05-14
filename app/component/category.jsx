"use client"
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Category = () => {
    useEffect(() => {
		Aos.init();
	}, []);
  return (
    <>
    <div>
        <div>

            <h1 className='flex justify-center items-center text-4xl goudy'>
                TOP CATEGORIES
            </h1>
        </div>

         <div className='flex flex-col'>
         <div className='flex justify-around my-6 '
          data-aos="fade-left"
          data-aos-duration="2000"
         >
            <div className='flex flex-col justify-center items-center space-y-2'>
            <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            

            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
            </div>
           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            
            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>
           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            
            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>
           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            
            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>
           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            
            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>

           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px] scale-100 transition-all'

            
            />    
            <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>
           
        </div>

        <div className='flex justify-around my-6 '
         data-aos="fade-right"
         data-aos-duration="2000"
        >
            <div className='flex flex-col justify-center items-center space-y-2'>
            <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            

            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
            </div>
           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            
            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>
           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            
            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>
           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            
            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>
           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px]'

            
            />   
             <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>

           <div className='flex flex-col justify-center items-center space-y-2'>
           <img src="/cat3.jpg" alt="Category1"
            width={250} height={220}
            className='rounded-full w-[220px] h-[220px] scale-100 transition-all'

            
            />    
            <p className='text-xl hel2'>
                PANNA STONE
            </p>
           </div>
           
        </div>

         </div>
    </div>
    
    
    </>
  )
}

export default Category