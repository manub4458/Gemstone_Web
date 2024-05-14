import React from 'react'

const Hero = () => {
  return (
   <>
   
   <div className='h-screen flex justify-around items-center'>
     <div className='flex flex-col space-y-2 '>
        <h1 className='text-4xl goudy'>
            Ethical Handmade 
        </h1>

        <h2 className='text-4xl goudy'>
            Stones
        </h2>

        <h4 className='hel2'>
            BUYING DISCOUNTED GEMS ONLINE
        </h4>

        <button className='bg-[#333333] text-white p-3 rounded-xl hel2'>
            Shop Now
        </button>
     </div>
    
     <div className='flex'>
        <img src="/hero3.jpg" alt="Hero1" 
         width={400} height={400}
         className='w-[425px] h-[679px]'
        />
        <img src="/hero2.jpg" alt="Hero1" 
         width={400} height={400}
         className='w-[425px] h-[679px]'
        />
     </div>
   </div>
   
   </>
  )
}

export default Hero