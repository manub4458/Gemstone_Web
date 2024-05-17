import React from 'react'

const Cost = () => {
  return (
    <>
    <div className='my-10'>
      <div className='flex justify-center items-center gap-x-4 h-screen w-screen'>
      <div className='flex flex-col w-[50%] h-screen justify-center items-center'>
        <div
        className='h-[60%]  w-full'
        >
        <img src="/pro1.webp" alt=""
        className='h-full  w-full'
         
        />
        </div>

        <div
         className='h-[50%]   space-y-6  w-full flex flex-col justify-center items-center'
        >

        <div className='text-4xl flex flex-col justify-center items-center space-y-2 kra'>
        <p>
            There Is No Price For
            </p>
            <p>
            Happiness And Yet
            </p>

            <p>
            We Have Kept It Fair.
            </p>
        </div>
           <button className='px-4 py-2 border hel2 border-black'>
            BEST PRICE GURANTEE
           </button>
        </div>
      </div>
      <div className='flex flex-col w-[50%] h-full justify-center items-center'>
        <img src="/pro2.webp" alt=""
         className='h-full  w-full'
        />
      </div>
     
      </div>
    </div>
    
    </>
  )
}

export default Cost